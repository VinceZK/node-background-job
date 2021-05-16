import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Parameter, ParameterDefinitions} from '../../job-types';
import {Attribute, AttributeBase, AttributeControlService, EntityService} from 'jor-angular';
import {MessageService} from 'ui-message-angular';

@Component({
  selector: 'app-job-parameters',
  templateUrl: './job-parameters.component.html',
  styleUrls: ['./job-parameters.component.css']
})
export class JobParametersComponent implements OnInit, OnChanges {
  @Input() parameterDefinitions!: ParameterDefinitions;
  @Input() currentJobStep!: FormGroup;
  @Input() readonly!: boolean;
  groups: any[] = [];
  parameters: any[] = [];
  boolExpressions: any[] = [];
  paramFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private entityService: EntityService,
              private messageService: MessageService,
              private attributeControlService: AttributeControlService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.groups = [];
    this.parameters = [];
    this.paramFormGroup = this.fb.group({});
    if (!this.parameterDefinitions) { return; }
    for (const [groupName, parameterDefinition] of Object.entries(this.parameterDefinitions)) {
      this.groups.push({
        name: groupName,
        label: parameterDefinition.text?.DEFAULT,
        displayIn: parameterDefinition.displayIn,
      });
      for (const [paramName, paramDefinition] of Object.entries(parameterDefinition.parameters)) {
        const parameter = {
          name: paramName,
          paramDefinition,
          group: groupName,
          attributeControl: new AttributeBase()
        };

        // evaluate boolean expression
        this.registerBoolExpressions(paramName, paramDefinition);

        // get the parameter values
        const paramValueStr = this.currentJobStep.get('parameters')?.value;
        let paramValues = {};
        try {
          if (paramValueStr && typeof paramValueStr === 'string') {
            paramValues = JSON.parse(paramValueStr);
          } else {
            paramValues = paramValueStr;
          }
        } catch (e) {
          this.messageService.reportMessage('JOB', 'GENERAL', 'E', e.message);
        }
        // @ts-ignore
        const paramValue = paramValues[paramName] || paramDefinition.defaultValue;
        if (paramDefinition.mandatory) {
          this.paramFormGroup.addControl(paramName, this.fb.control(paramValue, Validators.required));
        } else {
          this.paramFormGroup.addControl(paramName, this.fb.control(paramValue));
        }

        // parameter visualization
        if (paramDefinition.dataElement) {
          this.entityService.getElementMeta(paramDefinition.dataElement)
            .subscribe( attrCtrl => {
              const attribute = attrCtrl as Attribute;
              attribute.ATTR_GUID = paramName;
              attribute.ATTR_NAME = paramName;
              attribute.DATA_ELEMENT = paramDefinition.dataElement;
              attribute.PRIMARY_KEY = paramDefinition.mandatory;
              if (paramDefinition.text?.DEFAULT !== paramName) {
                attribute.LABEL_TEXT = paramDefinition.text?.DEFAULT;
              }
              // @ts-ignore
              parameter.attributeControl = this.attributeControlService.toSingleAttributeControl(attribute);
              this.adjustAttributeControl(parameter.attributeControl, paramDefinition);
            });
        } else {
          const paramAttribute = new Attribute();
          paramAttribute.ATTR_GUID = paramName;
          paramAttribute.ATTR_NAME = paramName;
          paramAttribute.LABEL_TEXT = paramAttribute.LIST_HEADER_TEXT = paramDefinition.text?.DEFAULT;
          paramAttribute.DATA_TYPE = paramDefinition.type || 1; // 1 = Char
          paramAttribute.PRIMARY_KEY = paramDefinition.mandatory;
          // @ts-ignore
          parameter.attributeControl = this.attributeControlService.toSingleAttributeControl(paramAttribute);
          this.adjustAttributeControl(parameter.attributeControl, paramDefinition);
        }

        this.parameters.push(parameter);
      }
    }
    // evaluate boolean expressions
    this.evaluateBoolExpressions();
  }

  private adjustAttributeControl(attributeControl: AttributeBase, paramDefinition: Parameter): void {
    if (paramDefinition.pattern) {
      attributeControl.pattern = paramDefinition.pattern;
    }
    switch (paramDefinition.displayAs) {
      case 'dropdown':
        // @ts-ignore
        attributeControl.controlType = 'dropdown';
        attributeControl.dropdownList = [];
        // @ts-ignore
        for (const [key, value] of Object.entries(paramDefinition.domain)) {
          // @ts-ignore
          attributeControl.dropdownList.push({ key, value: value.DEFAULT});
        }
        break;
      case 'password':
        attributeControl.controlType = 'password';
        break;
      case 'text':
        attributeControl.controlType = 'textarea';
        attributeControl.rows = 3;
        break;
      default:
    }
  }

  private registerBoolExpressions(paramName: string, paramDefinition: Parameter): void {
    if (paramDefinition.readOnly && typeof paramDefinition.readOnly !== 'boolean') {
      this.boolExpressions.push({
        paramName,
        attribute: 'readOnly',
        expression: paramDefinition.readOnly
      });
    }
    if (paramDefinition.hidden && typeof paramDefinition.hidden !== 'boolean') {
      this.boolExpressions.push({
        paramName,
        attribute: 'hidden',
        expression: paramDefinition.hidden
      });
    }
  }

  getGroupParameters(groupName: string): any[] {
    return this.parameters.filter( param => param.group === groupName);
  }

  generateParamValues(): boolean {
    if (this.paramFormGroup.invalid) {
      this.messageService.reportMessage('JOB', 'INVALID_PARAMETER_VALUE', 'E');
      return false;
    }
    if (this.paramFormGroup.dirty) {
      this.currentJobStep.get('parameters')?.setValue(JSON.stringify(this.paramFormGroup.getRawValue()));
      this.currentJobStep.markAsDirty();
    }
    return true;
  }

  onChange($event: any): void {
    this.evaluateBoolExpressions();
  }

  private evaluateBoolExpressions(): void {
    const parameters = this.paramFormGroup.getRawValue();
    this.boolExpressions.forEach( boolExpr => {
      const parameter = this.parameters.filter( param => param.name === boolExpr.paramName)[0];
      if (!parameter) { return;}
      const bool = evaluateBoolExpression(boolExpr.expression);
      if (parameter.paramDefinition[boolExpr.attribute] !== bool) {
        parameter.paramDefinition[boolExpr.attribute] = bool;
        this.paramFormGroup.get(boolExpr.paramName)?.setValue('');
      }
    });
    function evaluateBoolExpression(expression: string): boolean {
      const str = '"use strict";return ( function(parameters) { return (' + expression + ') } );';
      return Function(str)()(parameters);
    }
  }
}


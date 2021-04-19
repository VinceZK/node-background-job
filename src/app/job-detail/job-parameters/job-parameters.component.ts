import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ParameterDefinitions} from '../../job-types';
import {Attribute, AttributeControlService, EntityService} from 'jor-angular';
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
        label: parameterDefinition.text?.DEFAULT
      });
      for (const [paramName, paramDefinition] of Object.entries(parameterDefinition.parameters)) {
        const parameter = {
          name: paramName,
          paramDefinition,
          group: groupName,
          attributeControl: null
        };

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
            } );
        } else {
          const paramAttribute = new Attribute();
          paramAttribute.ATTR_GUID = paramName;
          paramAttribute.ATTR_NAME = paramName;
          paramAttribute.LABEL_TEXT = paramAttribute.LIST_HEADER_TEXT = paramDefinition.text?.DEFAULT;
          paramAttribute.DATA_TYPE = paramDefinition.type || 1; // 1 = Char
          paramAttribute.PRIMARY_KEY = paramDefinition.mandatory;
          // @ts-ignore
          parameter.attributeControl = this.attributeControlService.toSingleAttributeControl(paramAttribute);
        }
        this.parameters.push(parameter);

        const paramValueStr = this.currentJobStep.get('parameters')?.value;
        let paramValues = {};
        try {
          if (paramValueStr) {
            paramValues = JSON.parse(paramValueStr);
            if (typeof paramValues === 'string') {
              paramValues = JSON.parse(paramValues);
            }
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
      }
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
}


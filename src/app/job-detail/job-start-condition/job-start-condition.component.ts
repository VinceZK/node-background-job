import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AttributeBase, AttributeControlService, RelationMeta} from 'jor-angular';

@Component({
  selector: 'app-job-start-condition',
  templateUrl: './job-start-condition.component.html',
  styleUrls: ['./job-start-condition.component.css']
})
export class JobStartConditionComponent implements OnInit {
  @Input() readonly!: boolean;
  @Input() mainForm!: FormGroup;
  @Input() relationMetas!: RelationMeta[];
  jobStartConditionFormGroup!: FormGroup;
  private attrCtrls!: AttributeBase[];

  get getSpecificTimeDisplay(): string {
    return this.jobStartConditionFormGroup.get('mode')?.value === 1 ? 'block' : 'none';
  }

  constructor(private attributeControlService: AttributeControlService) { }

  ngOnInit(): void {
    this.jobStartConditionFormGroup = this.mainForm.get('startCondition') as FormGroup;
    this.attrCtrls = this.attributeControlService.toAttributeControl(
      // @ts-ignore
      this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'r_start_condition').ATTRIBUTES);
  }

  getJobAttrCtrlFromID(fieldName: string): AttributeBase {
    // @ts-ignore
    return this.attrCtrls.find( attrCtrl => attrCtrl.name === fieldName);
  }

  onChangeMode(): void {
    // this.currentMode++;
    // if (this.currentMode === 4) {
    //   this.currentMode = 0;
    // }
    // this.jobStartConditionFormGroup.get('mode')?.setValue(this.currentMode);
    // console.log(this.jobStartConditionFormGroup.get('mode')?.value);
  }
}

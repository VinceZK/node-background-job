import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AttributeBase, AttributeControlService, RelationMeta} from 'jor-angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() readonly!: boolean;
  @Input() mainForm!: FormGroup;
  @Input() relationMetas!: RelationMeta[];
  private jobAttrCtrls!: AttributeBase[];

  constructor(private attributeControlService: AttributeControlService) { }

  ngOnInit(): void {
    this.jobAttrCtrls = this.attributeControlService.toAttributeControl(
      // @ts-ignore
      this.relationMetas.find( relationMeta => relationMeta.RELATION_ID === 'job').ATTRIBUTES);
  }

  getJobAttrCtrlFromID(fieldName: string): AttributeBase {
    // @ts-ignore
    return this.jobAttrCtrls.find( attrCtrl => attrCtrl.name === fieldName);
  }

}

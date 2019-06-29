import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-no-show',
  templateUrl: './form-no-show.component.html',
  styleUrls: ['./form-no-show.component.scss'],
})
export class FormNoShowComponent implements OnInit {

  noShowForm: FormGroup;

  childrenList = ['John Smith', 'Hans Schneider', 'Jean Leblanc', 'Giovanni Russo']
  reasonList = ['sickness', 'vacations', 'birthday', 'other']

  todayFrom:any  = new Date().toISOString();
  todayTo:any  = new Date().toISOString();
  minDate:any = new Date().toISOString();

  constructor() { }

  ngOnInit() {
    this.noShowForm = new FormGroup({
      childName: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
      dateFrom: new FormControl('', Validators.required),
      dateTo: new FormControl('', Validators.required),
      notes: new FormControl('')
    });
  }

  get childName() {
    return this.noShowForm.get('childName');
  }

  get reason() {
    return this.noShowForm.get('reason');
  }

  get dateFrom() {
    return this.noShowForm.get('dateFrom');
  }

  get dateTo() {
    return this.noShowForm.get('dateTo');
  }

  get notes() {
    return this.noShowForm.get('notes');
  }

}

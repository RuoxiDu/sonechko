import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms'

@Component({
  selector: 'app-form-no-show',
  templateUrl: './form-no-show.component.html',
  styleUrls: ['./form-no-show.component.scss'],
})
export class FormNoShowComponent implements OnInit {

  noShowForm: FormGroup;

  childrenList = ['John Smith', 'Hans Schneider', 'Jean Leblanc', 'Giovanni Russo']
  reasonList = ['sickness', 'vacations', 'birthday', 'other']

  todayFrom:any  = new Date().toISOString(); // sets min date for Date To:
  today:any  = new Date().toISOString(); // sets current date for Date To:
  // sets min date for Date From: to 30 days ago
  minDate:any  = new Date(new Date().setDate(new Date().getDate()-30)).toISOString();

  constructor() { }

  ngOnInit() {
    this.noShowForm = new FormGroup({
      childName: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
      dateFrom: new FormControl('', Validators.required),
      dateTo: new FormControl('', [Validators.required]), 
      notes: new FormControl('')
    }, 
      // {validator: this.pastDateValidator('dateFrom', 'dateTo')})
    )}

  // pastDateValidator(from: string, to: string) {
  //   return (fg: FormGroup) => {
  //     let f = fg.controls[from];
  //     let t = fg.controls[to];
  //     if (f.value > t.value) {
  //       t.setErrors({pastDateValidator: true});
  //     } else {
  //       t.setErrors(null);
  //     }
  //   }
  // }

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

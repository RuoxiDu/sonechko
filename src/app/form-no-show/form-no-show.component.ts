import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms'

@Component({
  selector: 'app-form-no-show',
  templateUrl: './form-no-show.component.html',
  styleUrls: ['./form-no-show.component.scss'],
})
export class FormNoShowComponent implements OnInit {
  name='';

  public noShowForm: FormGroup;

  public childrenList = ['John Smith', 'Hans Schneider', 'Jean Leblanc', 'Giovanni Russo']
  public reasonList = ['sickness', 'vacations', 'birthday', 'other']

  // sets current date for Date From:
  today:any  = new Date().toISOString(); 
  // sets min date for Date From: to 30 days ago
  minDate:any  = new Date(new Date().setDate(new Date().getDate()-30)).toISOString();

  public placeholder: string = 'Search for name...';
  public keyword = 'name';
  public historyHeading: string = 'Recently selected';
  
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }


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
  )
    this.noShowForm.get('dateFrom').setValue(new Date().toISOString());
    this.noShowForm.get('dateTo').setValue(new Date().toISOString());
  }
  
  //Hack to make sure the dropdown list shows on top of the next input.
  ngAfterViewInit() {
    (document.querySelector('.autocomplete-container') as HTMLElement).style.zIndex = '100';
    (document.querySelector('.input-container > input') as HTMLElement).style.fontSize = '1.25em';
  }

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
  /**
   * Submit reactive form
   */
  submitReactiveForm() {
    if (this.noShowForm.valid) {
      console.log(this.noShowForm.value);
    }
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

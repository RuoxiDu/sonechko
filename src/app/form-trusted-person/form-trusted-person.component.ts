import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-trusted-person',
  templateUrl: './form-trusted-person.component.html',
  styleUrls: ['./form-trusted-person.component.scss'],
})
export class FormTrustedPersonComponent implements OnInit {

  trustedPersonForm;

  constructor() { }

  ngOnInit() {
    this.trustedPersonForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[(]?([0-9]{3})[)]?[-. ]?([0-9]{3})[-. ]?([0-9]{4})')])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[^\s@]+@[^\s@]+\.[^\s@]{2,}')])),
      photo: new FormControl(''),
      copyOfId: new FormControl('')
    });
  }

}

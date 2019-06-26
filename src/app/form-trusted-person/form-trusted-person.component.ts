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
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('', Validators.email),
      photo: new FormControl(''),
      copyOfId: new FormControl(''),
    });
  }

}

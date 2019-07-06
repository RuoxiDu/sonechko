import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormNoShowComponent } from './form-no-show.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormNoShowComponent
      }
    ])
  ],
  declarations: [FormNoShowComponent]
})
export class FormNoShowModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProfileRoutingModule } from './add-profile-routing.module';
import { AddProfilesComponent } from './add-profiles/add-profiles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProfilesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AddProfileRoutingModule
  ]
})
export class AddProfileModule { }

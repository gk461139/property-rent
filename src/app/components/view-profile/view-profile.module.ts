import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingPathRoutingModule } from './view-profile-routing.module';
import { ViewListsComponent } from './view-lists/view-lists.component';


@NgModule({
  declarations: [
    ViewListsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingPathRoutingModule
  ]
})
export class ProfileRoutingPathModule { }

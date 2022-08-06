import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfilesComponent } from './add-profiles/add-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: AddProfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProfileRoutingModule { }

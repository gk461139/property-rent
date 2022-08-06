import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListsComponent } from './view-lists/view-lists.component';

const routes: Routes = [
  {
    path: '',
    component: ViewListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingPathRoutingModule { }

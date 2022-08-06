import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/view-profile/view-profile.module').then( m => m.ProfileRoutingPathModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./components/add-profile/add-profile.module').then( m => m.AddProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class RoutingPathRoutingModule { }

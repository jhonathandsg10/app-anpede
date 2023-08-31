import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAssociadoPage } from './add-associado.page';

const routes: Routes = [
  {
    path: '',
    component: AddAssociadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAssociadoPageRoutingModule {}

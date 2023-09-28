import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditEquipamentoPage } from './add-edit-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditEquipamentoPageRoutingModule {}

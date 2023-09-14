import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelEquipamentoPage } from './sel-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: SelEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelEquipamentoPageRoutingModule {}

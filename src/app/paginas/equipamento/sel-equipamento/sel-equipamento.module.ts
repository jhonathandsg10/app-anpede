import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelEquipamentoPageRoutingModule } from './sel-equipamento-routing.module';

import { SelEquipamentoPage } from './sel-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelEquipamentoPageRoutingModule
  ],
  declarations: [SelEquipamentoPage]
})
export class SelEquipamentoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditEquipamentoPageRoutingModule } from './add-edit-equipamento-routing.module';

import { AddEditEquipamentoPage } from './add-edit-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditEquipamentoPageRoutingModule
  ],
  declarations: [AddEditEquipamentoPage]
})
export class AddEditEquipamentoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAssociadoPageRoutingModule } from './add-associado-routing.module';

import { AddAssociadoPage } from './add-associado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAssociadoPageRoutingModule
  ],
  declarations: [AddAssociadoPage]
})
export class AddAssociadoPageModule {}

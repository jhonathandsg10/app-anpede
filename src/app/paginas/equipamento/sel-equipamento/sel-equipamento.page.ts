import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EquipamentoDTO } from 'src/app/models/EquipamentoDTO';
import { EquipamentoService } from 'src/app/services/domain/equipamento.service';

@Component({
  selector: 'app-sel-equipamento',
  templateUrl: './sel-equipamento.page.html',
  styleUrls: ['./sel-equipamento.page.scss'],
})
export class SelEquipamentoPage implements OnInit {

  equipamentos!: EquipamentoDTO[];

  constructor(public equipamentoService: EquipamentoService,
    private navController: NavController) { }

  //findall().subscribe(res => {}, err => {})
  ionViewDidEnter() {
    this.equipamentoService.findAll()
      .subscribe({
        next:
          (response) => this.equipamentos = response,
        error:
          (error) => console.log(error)
      });
  }

  addEditEquipamento() {
    this.navController.navigateForward('add-edit-equipamento');
  }

  ngOnInit() {
  }

}

import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
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


  constructor(public equipamentoservice: EquipamentoService,
        private navController: NavController
    ) { }
  ionViewDidEnter(){
    this.equipamentoservice.findAll().subscribe(Response => { 
      this.equipamentos = Response;
      //console.log(Response);
    }, error =>{
      console.log(error);
    }
    );
  }
  addEditEquipamento(){
    this.navController.navigateForward('add-edit-equipamento');
  }
  ngOnInit() {
  }

}

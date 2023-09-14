import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EquipamentoService } from 'src/app/services/domain/equipamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public nav: NavController) { 
    
  }
  equipamento(){
    this.nav.navigateForward('sel-equipamento')
  }

  ngOnInit() {
  }

}

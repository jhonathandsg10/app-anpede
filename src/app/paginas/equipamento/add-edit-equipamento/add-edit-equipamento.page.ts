import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { EquipamentoService } from 'src/app/services/domain/equipamento.service';

@Component({
  selector: 'app-add-edit-equipamento',
  templateUrl: './add-edit-equipamento.page.html',
  styleUrls: ['./add-edit-equipamento.page.scss'],
})
export class AddEditEquipamentoPage implements OnInit {

  equipamentoForm!: FormGroup;

 

  constructor(private formBuilder: FormBuilder,
      public equipamentoService: EquipamentoService,
      public navController: NavController,
      public alertController: AlertController
    ) { }

  submit(){
    this.equipamentoService.insertView(this.equipamentoForm.value).subscribe(
      reponse =>{this.presentAlert('Sucesso','O equipamento foi salvo com sucesso',
      ['Ok']
      )
        })
    
  }

  ngOnInit() {
    this.equipamentoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      marca: ['', Validators.required],
      caterogoria: ['', Validators.required],
      foto: ['', Validators.required],
      valor: ['', Validators.required],
      quantidade: ['', Validators.required],
    })
  }
  async presentAlert(header: string, 
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons:[
        {
          text:'Ok',
          handler: ()=> {
            this.navController.navigateForward('sel-equipamento');
          }
        }
      ]
    });

    await alert.present();
  }

}

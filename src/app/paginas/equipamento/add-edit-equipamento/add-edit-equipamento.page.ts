import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private alertController: AlertController,
    private navController: NavController,
    private route: ActivatedRoute,
    public equipamentoService: EquipamentoService) { }

  submit() {
    this.equipamentoService.insert(this.equipamentoForm.value)
      .subscribe(response => {
        this.presentAlert('Sucesso',
          'O equipamento foi salvo com sucesso',
          ['Ok'])
      })
  }

  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.equipamentoService.findById(id).subscribe(response => {
      this.equipamentoForm = this.formBuilder.group({
        id: [response.id],
        nome: [response.nome, Validators.required],
        descricao: [response.descricao, Validators.required],
        marca: [response.marca, Validators.required],
        categoria: [response.categoria, Validators.required],
        foto: [response.foto, Validators.required],
        valor: [response.valor, Validators.required],
        quantidade: [response.quantidade, Validators.required]
      })
    })


  }


  async presentAlert(header: string,
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navController.navigateForward('sel-equipamento');
          }
        }
      ]
    });

    await alert.present();
  }
}
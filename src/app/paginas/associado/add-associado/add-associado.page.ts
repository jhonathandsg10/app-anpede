import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AssociadoService } from 'src/app/services/domain/associado.service';

@Component({
  selector: 'app-add-associado',
  templateUrl: './add-associado.page.html',
  styleUrls: ['./add-associado.page.scss'],
})
export class AddAssociadoPage implements OnInit {

  associadoForm!: FormGroup;

  hasErrors = false;
  errorsMessage!: string[];

  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private associadoService: AssociadoService) { }

  submit() {
    //if(this.associadoForm.invalid || this.associadoForm.pending){
    //  return;
    //}
    this.errorsMessage = [];
    if (this.associadoForm.get('nome')?.hasError('required')) {
      this.errorsMessage.push("O nome é obrigatório");
    }
    if (this.associadoForm.get('cpf')?.hasError('required')) {
      this.errorsMessage.push("O CPF é obrigatório");
    }
    this.hasErrors = this.errorsMessage.length > 0;

    //console.log(this.associadoForm.value);
    this.associadoService.insert(this.associadoForm.value)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Salvar Associado',
          'Os dados foram salvos com sucesso', ['Ok', 'Cancel']);
      })
  }

  ngOnInit() {
    this.associadoForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      cpf: ['', Validators.required],
      nascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      endereco: ['', Validators.required]
    })
  }

  async presentAlert(header: string, subHeader: string,
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
    });

    await alert.present();
  }

}
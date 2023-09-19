import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-associado',
  templateUrl: './add-associado.page.html',
  styleUrls: ['./add-associado.page.scss'],
})
export class AddAssociadoPage implements OnInit {

  associadoForm!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  submit(){
    
  }

  ngOnInit() {
    this.associadoForm = this.formBuilder.group({
        nome:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])]
    })
  }

}

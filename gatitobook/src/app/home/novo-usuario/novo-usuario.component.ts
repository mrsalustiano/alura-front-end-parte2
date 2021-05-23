import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private novoUsuarioService: NovoUsuarioService) { }

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: [''],
      password: [''],
    });

  }

  // tslint:disable-next-line: typedef
  cadastrar(){
    const novousuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novousuario);
  }

}

import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minunsculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioExistenteService: UsuarioExisteService,
              private novoUsuarioService: NovoUsuarioService,
              private router: Router) { }

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minunsculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password: [''],
    },
          {
        validators: [usuarioSenhaIguaisValidator],
      }
    );

  }


  cadastrar(){
    if (this.novoUsuarioForm.valid){
      const novousuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novousuario).subscribe(() => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      });

    }



  }

}

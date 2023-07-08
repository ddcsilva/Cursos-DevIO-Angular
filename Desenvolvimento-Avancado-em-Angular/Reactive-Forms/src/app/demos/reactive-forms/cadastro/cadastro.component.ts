import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup = new FormGroup({});
  usuario: Usuario = {} as Usuario;
  resultado: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: [''],
      senhaConfirmacao: ['']
    });
  }

  public adicionarUsuario(): void {
    if (this.formCadastro.dirty && this.formCadastro.valid) {
      this.usuario = Object.assign({}, this.usuario, this.formCadastro.value);
    } else {
      this.resultado = 'Formulário inválido!';
    }
  }

}

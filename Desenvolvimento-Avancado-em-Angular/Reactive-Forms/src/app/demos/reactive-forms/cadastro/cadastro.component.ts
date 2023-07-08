import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup = new FormGroup({});
  usuario: Usuario = {} as Usuario;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    });
  }

  public adicionarUsuario(): void {
    this.usuario = Object.assign({}, this.usuario, this.formCadastro.value);
    console.log(this.usuario);
  }

}

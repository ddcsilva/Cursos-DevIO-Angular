import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.formCadastro = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      senhaConfirmacao: new FormControl('')
    });
  }

  public adicionarUsuario(): void {
    let x = this.formCadastro.value;
    console.log(x);
  }

}

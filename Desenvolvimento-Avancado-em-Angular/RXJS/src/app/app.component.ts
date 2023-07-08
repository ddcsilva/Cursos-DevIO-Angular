import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RXJS - Promises e Observables';

  ngOnInit(): void {
    // this.testePromise('Danilo')
    //   .then((resposta: string) => console.log(resposta))
    //   .catch((erro: string) => console.log(erro))

    // this.testePromise('João')
    //   .then((resposta: string) => console.log(resposta))
    //   .catch((erro: string) => console.log(erro))

    // this.testeObservable('Danilo')
    //   .subscribe({
    //     next: resultado => console.log(resultado),
    //     error: erro => console.log(erro),
    //     complete: () => console.log('FIM!')
    //   })

    // this.testeObservable('João')
    //   .subscribe({
    //     next: resultado => console.log(resultado),
    //     error: erro => console.log(erro),
    //     complete: () => console.log('FIM!')
    //   })

    // const observer = {
    //   next: (valor: string) => this.escrever(valor),
    //   error: (erro: string) => this.escrever(erro),
    //   complete: () => this.escrever('FIM!')
    // }

    // const observable = this.testeObservable2('Danilo');
    // observable.subscribe(observer);

    const observer = {
      next: (valor: Usuario) => this.escrever(`${valor.nome} - ${valor.email}`),
      error: (erro: string) => this.escrever(erro),
      complete: () => this.escrever('FIM!')
    }

    const observable = this.usuarioObservable('Admin', 'admin@admin.com');
    const subscription = observable.subscribe(observer);

    setTimeout(() => {
      subscription.unsubscribe();
      this.escrever('Conexão fechada: ' + subscription.closed);
    }, 3500);
  }

  testePromise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome == 'Danilo') {
        setTimeout(() => {
          resolve(`Seja bem vindo ${nome}`)
        }, 2000);
      } else {
        reject(`Ops! Você não é o Danilo`)
      }
    })
  }

  testeObservable(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome === 'Danilo') {
        subscriber.next(`Olá ${nome}`)
        subscriber.next(`Olá de novo ${nome}`)

        setTimeout(() => {
          subscriber.next(`Resposta com delay ${nome}`)
        }, 5000);
      } else {
        subscriber.error(`Ops! Deu erro!`)
      }
    })
  }

  testeObservable2(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome === 'Danilo') {
        subscriber.next(`Olá ${nome}`)
        subscriber.next(`Olá de novo ${nome}`)

        setTimeout(() => {
          subscriber.next(`Resposta com delay ${nome}`)
        }, 5000);

        subscriber.complete()
      } else {
        subscriber.error(`Ops! Deu erro!`)
      }
    })
  }

  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable(subscriber => {
      if (nome === 'Admin') {
        let usuario = new Usuario(nome, email);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);
      } else {
        subscriber.error(`Ops! Deu erro!`)
      }
    })
  }

  private escrever(texto: string) {
    console.log(texto);
  }
}

export class Usuario {

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  nome: string;
  email: string;
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  botaoClicado() {
    let inputSenha = document.querySelector('#IdSenha')
    let olho = document.querySelector('#eyes')

    if(inputSenha?.getAttribute('type') == 'password') {
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha?.setAttribute('type', 'password')
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

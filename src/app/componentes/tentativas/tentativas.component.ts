import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Coracao } from '../../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.scss'
})
export class TentativasComponent  implements OnInit, OnChanges {

  @Input() tentativas : number =0;

  public coracoes: Coracao[] =[
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]

  constructor(){}

  ngOnChanges(): void {
      if (this.tentativas !== this.coracoes.length){
        let index = this.coracoes.length - this.tentativas;
        this.coracoes[index-1].cheio = false;

      }
  }

  ngOnInit(): void {

  }

}

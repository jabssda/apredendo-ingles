import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Frase } from '../../shared/frase.model'
import { FRASES } from './frases-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss'
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;
  instrucao : string  = "Traduza a fraze:";
  resposta : string ="";
  rodada : number =0;
  rodadaFrase!: Frase;
  progresso: number = 0;
  tentativas : number =3;
  @Output() encerrarJogo: EventEmitter<string> =  new EventEmitter();

  constructor(){
  //  this.encerrarJogo = new EventEmitter()
     this.atualizaRodada();
  }

  ngOnInit(): void {

  }

  atualizaResposta(event: Event): void{
    this.resposta  =  (< HTMLInputElement>event.target).value ;

  }

  verificarResposta(){
    if (this.rodadaFrase.frasePtBr == this.resposta){

      this.rodada++;
      this.rodadaFrase = this.frases[this.rodada]
      this.resposta ='';
      this.progresso = this.progresso + (100 / this.frases.length);
      if (this.rodada ===4 ){
        this.encerrarJogo.emit('vitoria')
      }else {
        this.atualizaRodada();
      }

    }else {

      this.tentativas--
      if (this.tentativas === -1)
      this.encerrarJogo.emit('derrota')
    }
  }

  atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];

  }


}

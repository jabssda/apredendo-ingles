import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

jogoEmAndamento : boolean = true;
ganhou :boolean = false;

  encerrarJogo(tipo : string ): void {
    this.ganhou = tipo ==='vitoria' ? true: false;
    this.jogoEmAndamento = false;
  }

  reiniciarJogo(){
    this.jogoEmAndamento = true;
    this.ganhou = false;
  }
}

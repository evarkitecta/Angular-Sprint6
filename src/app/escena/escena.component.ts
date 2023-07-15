import { Component, Input } from '@angular/core';
import { Phrase } from '../home/interfaces/phrase.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  //Con @Input le indicamos que el atributo phrasesEscena recibirá datos de otros componentes
  @Input()
  public phrasesEscena: Phrase[] = [];
  public currentSentence: number = 0;
  public activeSeguent: boolean = true;

  prev() {
    this.currentSentence--;
    if (this.currentSentence < 0) {
      this.currentSentence = 0;
    }
  }

  next() {
    this.currentSentence++;
    if (this.currentSentence >= this.phrasesEscena.length) {
      this.currentSentence = this.phrasesEscena.length - 1;
    }
  }
}

import { Component, Input } from '@angular/core';
import { Phrase } from '../home/interfaces/phrase.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input()
  public phrasesEscena: Phrase[] = [];
  public currentSentence: number = 0;

  prev(): void {
    if (this.currentSentence > 0) {
      this.currentSentence--;
    }
  }

  next(): void {
    if (this.currentSentence < this.phrasesEscena.length - 1) {
      this.currentSentence++;
    }
  }
}

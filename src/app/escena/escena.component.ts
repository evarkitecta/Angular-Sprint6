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
  public phrasesEscena: Phrase[] = [

  ];
}

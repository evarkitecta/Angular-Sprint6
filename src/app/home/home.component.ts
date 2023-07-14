import { Component } from '@angular/core';
import { Phrase } from './interfaces/phrase.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public phrasesHome: Phrase[] = [
    {
      text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial.",
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    },
    {
      text: "L'heroi va decidir travessar la porta que el portava a casa.",
    },
    {
      text: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
    }
  ]

}

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
      img: "../../assets/images/1.jpg"
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      img: "../../assets/images/1.jpg"
    },
    {
      text: "L'heroi va decidir travessar la porta que el portava a casa.",
      img: "../../assets/images/1.jpg"
    },
    {
      text: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
      img: "../../assets/images/1.jpg"
    }
  ]
  public showEscena = false;
  showEscenaContent() {
    this.showEscena = true;
  }

}

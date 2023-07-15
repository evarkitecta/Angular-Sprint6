import { Component, Input } from '@angular/core';
import { Phrase } from '../home/interfaces/phrase.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  //Con @Input le indicamos que el atributo phrasesEscena recibirá datos tipo Phrase[] de otros componentes
  @Input()
  public phrasesEscena: Phrase[] = [];
  public currentSentence: number = 0;
  // public currentImage: string = '../../assets/images/' + this.phrasesEscena[this.currentSentence].img;//¿Por qué no funciona aquí la ruta si en la linea 34 está funcionando?"
  public currentImage: string = '../../assets/images/1.jpg'; // Ruta de la imagen inicial

  prev(): void {
    if (this.currentSentence > 0) {
      this.currentSentence--;
    }
    this.updateCurrentImage(); // Actualizar la imagen de fondo al cambiar la frase
  }

  next(): void {
    if (this.currentSentence < this.phrasesEscena.length - 1) {
      this.currentSentence++;
    }
    this.updateCurrentImage(); // Actualizar la imagen de fondo al cambiar la frase
  }

  updateCurrentImage(): void {
    // Obtener la ruta de la imagen actual en función de la frase actual
    this.currentImage = '../../assets/images/' + this.phrasesEscena[this.currentSentence].img;
  }
}

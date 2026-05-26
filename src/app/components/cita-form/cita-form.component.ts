import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonInput,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class CitaFormComponent {

  frase: string = '';
  autor: string = '';

  @Output() agregar = new EventEmitter<Cita>();

  agregarCita() {
    if (this.frase.length >= 5 && this.autor.length >= 2) {
      this.agregar.emit({
        frase: this.frase,
        autor: this.autor
      });

      this.frase = '';
      this.autor = '';
    }
  }
}
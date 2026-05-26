import { Injectable } from '@angular/core';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citas: Cita[] = [
    { id: 1, frase: 'La educación es el arma más poderosa para cambiar el mundo.', autor: 'Nelson Mandela' },
    { id: 2, frase: 'Solo sé que nada sé.', autor: 'Sócrates' },
    { id: 3, frase: 'Pienso, luego existo.', autor: 'René Descartes' }
  ];

  obtenerCitas(): Cita[] {
    return this.citas;
  }

  obtenerCitaAleatoria(): Cita {
    const indice = Math.floor(Math.random() * this.citas.length);
    return this.citas[indice];
  }

  agregarCita(cita: Cita): void {
    cita.id = Date.now();
    this.citas.push(cita);
  }

  eliminarCita(id: number): void {
    this.citas = this.citas.filter(cita => cita.id !== id);
  }
}
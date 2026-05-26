import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { Cita } from 'src/app/models/cita';
import { CitasService } from 'src/app/services/citas';
import { CitaCardComponent } from 'src/app/components/cita-card/cita-card.component';
import { ConfiguracionService } from 'src/app/services/configuracion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule,
    RouterLink,
    CitaCardComponent
  ]
})
export class InicioPage implements OnInit {

  citaAleatoria!: Cita;
  permitirEliminar: boolean = true;

  constructor(
    private citasService: CitasService,
    private configService: ConfiguracionService
  ) {}

  async ngOnInit() {
    this.cargarCita();

    const config = await this.configService.obtenerConfig();
    this.permitirEliminar = config.permitirEliminar;
  }

  cargarCita() {
    this.citaAleatoria = this.citasService.obtenerCitaAleatoria();
  }

  eliminarCita(id: number) {
    this.citasService.eliminarCita(id);
    this.cargarCita();
  }

}
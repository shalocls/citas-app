import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { Cita } from 'src/app/models/cita';
import { SqliteService } from 'src/app/services/sqlite';
import { CitaCardComponent } from 'src/app/components/cita-card/cita-card.component';
import { CitaFormComponent } from 'src/app/components/cita-form/cita-form.component';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
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
    CitaCardComponent,
    CitaFormComponent
  ]
})
export class GestionCitasPage implements OnInit {

  citas: any[] = [];

  constructor(private sqlite: SqliteService) {}

  async ngOnInit() {
    await this.sqlite.init();
    this.citas = await this.sqlite.obtenerCitas();
  }

  async eliminarCita(id: number) {
    await this.sqlite.eliminarCita(id);
    this.citas = await this.sqlite.obtenerCitas();
  }

  async agregarCita(cita: Cita) {
    await this.sqlite.agregarCita(cita.frase, cita.autor);
    this.citas = await this.sqlite.obtenerCitas();
  }

}
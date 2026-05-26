import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ConfiguracionService } from 'src/app/services/configuracion';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCheckbox,
    IonItem,
    IonLabel,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class ConfiguracionPage implements OnInit {

  permitirEliminar: boolean = true;

  constructor(private configService: ConfiguracionService) {}

  async ngOnInit() {
    const config = await this.configService.obtenerConfig();
    this.permitirEliminar = config.permitirEliminar;
  }

  async guardar() {
    await this.configService.guardarConfig({
      permitirEliminar: this.permitirEliminar
    });
  }
}
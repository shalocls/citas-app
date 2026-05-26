import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private KEY = 'config';

  async guardarConfig(config: any) {
    await Preferences.set({
      key: this.KEY,
      value: JSON.stringify(config)
    });
  }

  async obtenerConfig() {
    const { value } = await Preferences.get({ key: this.KEY });

    if (value) {
      return JSON.parse(value);
    }

    return {
      permitirEliminar: true
    };
  }
}
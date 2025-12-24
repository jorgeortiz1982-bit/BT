import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,         // <--- Muy importante
  imports: [IonicModule, CommonModule] // <--- Para que ion-button, ion-content, etc. funcionen
})
export class HomePage {
  temperatura: number | null = null;

  constructor() {}

  scanAndConnect() {
    // Aquí iría la lógica para conectar con Arduino vía Bluetooth
    console.log('Conectar Arduino');
    // Simulación de temperatura:
    this.temperatura = Math.floor(Math.random() * 40); // valor de prueba
  }
}

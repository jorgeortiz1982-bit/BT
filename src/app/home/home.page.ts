import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HomePage {
  temperatura: number | null = null;
  conectado: boolean = false;

  constructor() {}

  // Simula la conexión al Arduino
  scanAndConnect() {
    this.conectado = true;
    console.log('Conectado al Arduino (simulado)');

    // Simula lectura de temperatura cada 2 segundos
    setInterval(() => {
      if (this.conectado) {
        this.temperatura = this.simularTemperatura();
      }
    }, 2000);
  }

  // Función que simula temperatura de Arduino
  simularTemperatura(): number {
    return parseFloat((20 + Math.random() * 10).toFixed(2)); // 20°C a 30°C
  }

  // Desconectar (opcional)
  desconectar() {
    this.conectado = false;
    this.temperatura = null;
    console.log('Arduino desconectado');
  }
}

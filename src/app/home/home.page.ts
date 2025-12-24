import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BluetoothLe } from '@capacitor-community/bluetooth-le';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  temperatura: string = '...';

  constructor() {}

  async scanAndConnect() {
    try {
      // Inicializa Bluetooth
      await BluetoothLe.initialize();

      // Escanea por dispositivos BLE
      const result = await BluetoothLe.requestDevice({
        services: [],  // deja vacío para que aparezca tu dispositivo
        optionalServices: []
      });

      console.log('Dispositivo conectado:', result.name);

      // Aquí conectarías a tu servicio y característica BLE para leer la temperatura
      // Ejemplo:
      // const data = await BluetoothLe.read({ deviceId: result.deviceId, service: 'xxxx', characteristic: 'xxxx' });
      // this.temperatura = new TextDecoder().decode(data.value);

    } catch (err) {
      console.error('Error Bluetooth:', err);
    }
  }
}

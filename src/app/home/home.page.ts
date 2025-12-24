import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BluetoothLe } from '@capacitor-community/bluetooth-le';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class HomePage {

  temperatura: string = '';

  constructor() {}

  async scanAndConnect() {
    await BluetoothLe.initialize();

    const device = await BluetoothLe.requestDevice({
      namePrefix: 'HM-10'
    });

    if (!device) return;

    const deviceId = device.deviceId;

    await BluetoothLe.connect({ deviceId });

    await BluetoothLe.startNotifications({
      deviceId,
      service: 'FFE0',
      characteristic: 'FFE1'
    }).then((result: any) => {
      const data = new TextDecoder().decode(result.value);
      this.temperatura = data;
      console.log('Temperatura:', data);
    });
  }
}

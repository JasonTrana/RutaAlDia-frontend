import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonText, IonItem, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { ApiMapService } from '../servicios/api-map.service';

@Component({
  selector: 'app-ruta-detalles',
  templateUrl: './ruta-detalles.page.html',
  styleUrls: ['./ruta-detalles.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonItem, IonText, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RutaDetallesPage{

  rutaDetalle = {}
  cood = {}

  constructor(private map: ApiMapService) { }
  
  getRuta(){
    this.map.getMap().then(
      res => {
        this.rutaDetalle = res
        console.log(this.rutaDetalle)
      },
      err => {
        console.log(err);
      });
  }
}

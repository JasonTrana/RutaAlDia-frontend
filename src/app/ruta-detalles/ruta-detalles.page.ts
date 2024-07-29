import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ruta-detalles',
  templateUrl: './ruta-detalles.page.html',
  styleUrls: ['./ruta-detalles.page.scss'],
  standalone: true,
  imports: [IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RutaDetallesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

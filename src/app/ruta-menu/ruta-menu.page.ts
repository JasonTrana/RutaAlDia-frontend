import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput,IonChip, IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons, IonList, IonItem } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ruta-menu',
  templateUrl: './ruta-menu.page.html',
  styleUrls: ['./ruta-menu.page.scss'],
  standalone: true,
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonChip, IonInput, IonSelect, IonSelectOption,IonItem, IonList, IonButtons, IonButton, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, RouterLink]
})
export class RutaMenuPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  Redirigir(){

  }

}

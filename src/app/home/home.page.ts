import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton, IonCol, IonGrid, IonRow, IonFooter, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonList, IonFooter, IonRow, IonGrid, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton],
})
export class HomePage {
  constructor() {}
}

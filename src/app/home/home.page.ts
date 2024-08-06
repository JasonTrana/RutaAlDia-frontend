import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton, IonCol, IonGrid, IonRow, IonFooter, IonList, IonText } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, CommonModule, IonList, IonFooter, IonRow, IonGrid, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton, RouterLink],
})
export class HomePage {
  constructor() {}
}

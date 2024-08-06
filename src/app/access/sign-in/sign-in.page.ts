import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonText, IonIcon, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons, IonBackButton, IonFooter } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [IonFooter, IonLabel, IonIcon, IonText, IonInput, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButtons, IonButton, IonBackButton, RouterLink]
})
export class SignInPage{

  constructor() { }

  registrar(){
    
  }

}

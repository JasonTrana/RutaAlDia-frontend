import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonItem,IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonIcon, IonSkeletonText, IonText, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonText, IonSkeletonText, IonIcon,  IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CuentaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

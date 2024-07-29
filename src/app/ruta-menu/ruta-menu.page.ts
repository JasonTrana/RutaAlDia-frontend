import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ruta-menu',
  templateUrl: './ruta-menu.page.html',
  styleUrls: ['./ruta-menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RutaMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

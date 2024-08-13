import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, ReactiveFormsModule],
})
export class SignUpPage implements OnInit {

  usuario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuario = this.fb.group({
      "correo": new FormControl("",Validators.required),
      "contraseña": new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  iniciarSeccion(){
    if(this.usuario.value.correo != "" && this.usuario.value.contraseña != ""){
      console.log("Is True")
    }
    else{
      console.log("Is False")
    }
  }

}

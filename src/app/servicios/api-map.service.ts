import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiMapService {
  key = ""
  urlAPI = "localhost:3000/api/map/ruta?"+this.key

  coord = {
    origin: {lat: 7721387, lgn: 7317381},
    destination: {lat: 8332894, lgn: 651121},
  }

  constructor(private http: HttpClient) { }

  getMap(){
    return new Promise<{}>((resuelta, fallo) => {
      this.http.get(this.urlAPI).subscribe(res => {
         resuelta(res); //devolvemos la respuesta de la llamada http
      }, (err) => {
         fallo(err); //devolvemos el error si se diera
      });             
    })
  }
}

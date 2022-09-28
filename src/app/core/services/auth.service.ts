import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginConLaravel(datos: any){
    return this.http.post("http://127.0.0.1:8000/api/v1/auth/login", datos);
  }

  registrarse(datos: any){
    return this.http.post("http://127.0.0.1:8000/api/v1/auth/registro", datos);
  }

  perfil(){
    return this.http.get("http://127.0.0.1:8000/api/v1/auth/perfil");
  }
}

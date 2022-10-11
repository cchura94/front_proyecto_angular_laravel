import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase = environment.servidor

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.urlBase}/producto`);
  }

  sendProducto(datos:any){
    return this.http.post(`${this.urlBase}/producto`, datos);
  }

  showProducto(id:number){
    return this.http.get(`${this.urlBase}/producto/${id}`);
  }

  updateProducto(id:number, datos:any){
    return this.http.put(`${this.urlBase}/producto/${id}`, datos);
  }

  deleteProducto(id:number){
    return this.http.delete(`${this.urlBase}/producto/${id}`);
  }
}

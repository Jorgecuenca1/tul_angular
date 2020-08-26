import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Product} from '../Product'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { noUndefined } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  server:string = 'http://localhost/tul/public/';
  headers : Headers = new Headers();
  options : any;
  constructor(private http:HttpClient) { 
    let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('enctype', 'multipart/form-data');
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('X-Requested-With', 'XMLHttpRequest');
      
  }
  addProduct(nombre,sku,descripcion,precio):Observable<Product>
  {
    const newProduct = new Product(nombre,sku,descripcion,precio);
    console.log(newProduct);
    return this.http.post<Product>(this.server+'add',newProduct);
  }
  getProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.server+'get');
  }
  deleteProduct(no):Observable<Product>
  { const newProduct = {
    id:no,
    nombre:'not set',
    sku:'not set',
    descripcion:'not set',
    precio:'not set',


  };
    return this.http.post<Product>(this.server+'delete',newProduct);
  }
}

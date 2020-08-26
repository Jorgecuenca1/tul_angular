import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import {ProductCart} from '../ProductCart'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { noUndefined } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  server:string = 'http://localhost/tul/public/';
  headers : Headers = new Headers();
  options : any;
  constructor(private http:HttpClient) { 
    let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('enctype', 'multipart/form-data');
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('X-Requested-With', 'XMLHttpRequest');
      
  }
  addProductCart(status):Observable<ProductCart>
  {
    const newProductCart = new ProductCart(status);
    console.log(newProductCart);
    return this.http.post<ProductCart>(this.server+'add',newProductCart);
  }
  
}

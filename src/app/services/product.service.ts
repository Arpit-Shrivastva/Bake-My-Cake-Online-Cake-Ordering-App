import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _https: HttpClient) { }

  products_url: string = "http://localhost:3000/products";

  getAllProducts():Observable<products[]>{
    return this._https.get<products[]>(this.products_url);
  }

  getProduct(id:any): Observable<products>{
    return this._https.get<products>(`${this.products_url}/${id}`);
  }
}

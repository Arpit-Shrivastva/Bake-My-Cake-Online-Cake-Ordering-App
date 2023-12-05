import { Injectable } from '@angular/core';
import { ProductRequest } from '../models/product-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeRequestService {

  constructor(private _https: HttpClient) { }

  url: string = "http://localhost:3000/ProductRequest";

  getAllProduct(): Observable<ProductRequest[]>{
    return this._https.get<ProductRequest[]>(`${this.url}`);
  }

  getSaveProduct(productRequest : ProductRequest): Observable<ProductRequest> {
    return this._https.post<ProductRequest>(`${this.url}`, productRequest);
  }

}

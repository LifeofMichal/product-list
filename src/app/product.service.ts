import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  private _urlProd: string = "http://localhost:3000/products";

  getProduct(){
    return this.http.get<Product[]>(this._urlProd);
  }

}

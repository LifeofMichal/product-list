import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }

  private _urlCat: string = "http://localhost:3000/categories";

  getCategory(){
    return this.http.get<Category[]>(this._urlCat);
  }
  
}

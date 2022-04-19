import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products')
    }

    postProduct(newProduct: any){
      return this.http.post('http://localhost:3000/products', newProduct)
    }
}

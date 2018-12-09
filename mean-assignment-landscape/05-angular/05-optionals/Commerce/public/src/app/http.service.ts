import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  createProduct(product: Product): Observable<Product> {
    console.log('from create product functionn', product);
    return this.http.post<Product>('/api/products', product);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  updateProduct(product): Observable<Product> {
    console.log('made it to update product with', product);
    return this.http.put<Product>(`/api/products/${product._id}`, product);
  }

  findProduct(id) {
    console.log('id from service', id);
    return this.http.get(`/api/products/${id}`, id);
  }

  deleteProduct(product): Observable<Product> {
    return this.http.delete<Product>(`/api/products/${product._id}`);
  }
}

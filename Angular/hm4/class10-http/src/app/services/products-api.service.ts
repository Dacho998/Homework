import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductDto, Product, UpdateProductDto } from '../models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private readonly baseUrl = 'https://fakestoreapi.com/products';

  constructor(private readonly http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(body: CreateProductDto): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, body);
  }

  updateProduct(id: number, body: UpdateProductDto): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, body);
  }

deleteProduct(id: number): Observable<Product> {
  return this.http.delete<Product>(`${this.baseUrl}/${id}`);
}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/categories`);
  }
}

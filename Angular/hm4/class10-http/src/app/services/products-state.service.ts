import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, tap } from 'rxjs';
import { CreateProductDto, Product, UpdateProductDto } from '../models/product.interface';
import { ProductsApiService } from './products-api.service';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsStateService {
  private readonly initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
  };

  private stateSubject = new BehaviorSubject<ProductState>(this.initialState);
  private state$ = this.stateSubject.asObservable();

  products$ = this.state$.pipe(map((s) => s.products));
  loading$ = this.state$.pipe(map((s) => s.loading));
  error$ = this.state$.pipe(map((s) => s.error));

  constructor(private readonly productApiService: ProductsApiService) {}

  private updateState(partial: Partial<ProductState>) {
    const current = this.stateSubject.value;
    this.stateSubject.next({ ...current, ...partial });
  }

  loadProducts() {
    this.updateState({ loading: true, error: null });
    this.productApiService.getAllProducts().subscribe({
      next: (data) => {
        this.updateState({ products: data, loading: false });
      },
      error: () => {
        this.updateState({ loading: false, error: 'Failed to load products.' });
      },
    });
  }

  createProduct(productData: CreateProductDto) {
    this.updateState({ loading: true, error: null });
    this.productApiService.createProduct(productData).subscribe({
      next: (newProduct) => {
        const current = this.stateSubject.value;
        this.updateState({ products: [...current.products, newProduct], loading: false });
      },
      error: () => {
        this.updateState({ loading: false, error: 'Failed to create product' });
      },
    });
  }

  updateProduct(id: number, changes: UpdateProductDto) {
    this.updateState({ loading: true, error: null });
    this.productApiService.updateProduct(id, changes).subscribe({
      next: (updated) => {
        const current = this.stateSubject.value;
        const updatedList = current.products.map((p) => (p.id === id ? updated : p));
        this.updateState({ products: updatedList, loading: false });
      },
      error: () => {
        this.updateState({ loading: false, error: 'Failed to update product' });
      },
    });
  }

  deleteProduct(id: number) {
    this.updateState({ loading: true, error: null });
    this.productApiService.deleteProduct(id).subscribe({
      next: () => {
        const current = this.stateSubject.value;
        const updatedList = current.products.filter((p) => p.id !== id);
        this.updateState({ products: updatedList, loading: false });
      },
      error: () => {
        this.updateState({ loading: false, error: 'Failed to delete product' });
      },
    });
  }
  getProduct(id: number): Observable<Product | undefined> {
    const current = this.stateSubject.value.products;
    const existing = current.find((p) => p.id === id);
    if (existing) {
      return of(existing);
    }

    return this.productApiService.getProductById(id).pipe(
      tap((product) => {
        const cur = this.stateSubject.value;
        const exists = cur.products.some((p) => p.id === product.id);
        if (!exists) {
          this.updateState({ products: [...cur.products, product] });
        }
      }),
    );
  }
  getCategories(): Observable<string[]> {
  return this.productApiService.getCategories();
}
}

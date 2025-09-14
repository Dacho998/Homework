import { Component, inject, signal } from '@angular/core';
import { ProductsStateService } from '../../services/products-state.service';
import { Product } from '../../models/product.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = toSignal<Product[]>(inject(ProductsStateService).products$, { initialValue: undefined });
  search = signal('');

  private readonly productStateService = inject(ProductsStateService);
  private readonly router = inject(Router);

  ngOnInit() {
    this.productStateService.loadProducts();
  }

  get filteredProducts() {
    const searchTerm = this.search().toLowerCase();
    return (this.products() ?? []).filter(
      (p) =>
      p.title.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );
  }

  onSelectProduct(id: number) {
    this.router.navigate(['/products', id]);
  }

  onEditProduct(id: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/products', id, 'edit']);
  }
  
  onDeleteProduct(id: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this product?')) {
      this.productStateService.deleteProduct(id);
    }
  }
}

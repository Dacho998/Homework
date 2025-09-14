import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateProductDto, Product } from '../../models/product.interface';
import { ProductsStateService } from '../../services/products-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  categories: string[] = [];
  isEditMode = signal(false);
  productId: number | null = null;
  productForm: FormGroup;
  errorMessage = signal(''); 

  private fb = inject(FormBuilder);
  private productStateService = inject(ProductsStateService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.initForm();
    this.productStateService.getCategories().subscribe({
      next: (cats: string[]) => {
        this.categories = cats;
        this.errorMessage.set('');
      },
      error: () => this.errorMessage.set('Failed to load categories.'),
    });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.productId = +id;
      this.isEditMode.set(true);
      this.loadProductForEdit(this.productId);
    } else {
      this.isEditMode.set(false);
    }
  }

 private loadProductForEdit(id: number) {
  this.productStateService.getProduct(id).subscribe({
    next: (product) => {
      if (product) {
        this.preloadFormValues(product);
      } else {
        this.errorMessage.set('Product not found!');
      }
    },
    error: () => this.errorMessage.set('Product not found!'),
  });
}


  private preloadFormValues(product: Product) {
    if (this.productForm) {
      this.productForm.patchValue({
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        imageUrl: product.image,
      });
    }
  }

  private initForm() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(2)]],
      price: [0, Validators.min(0.1)],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const formValues = this.productForm.value;
    const createProductDto: CreateProductDto = {
      title: formValues.title,
      description: formValues.description,
      image: formValues.imageUrl,
      category: formValues.category,
      price: +formValues.price,
    };

    if (this.isEditMode() && this.productId) {
      this.productStateService.updateProduct(this.productId, createProductDto);
    } else {
      this.productStateService.createProduct(createProductDto);
    }

    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}

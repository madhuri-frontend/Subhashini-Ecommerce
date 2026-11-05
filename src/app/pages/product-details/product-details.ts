import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product as ProductService } from '../../services/product';
import { Cart as CartService } from '../../services/cart';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
  productId: string | null = '';
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public cartService: CartService,
  ) {}
  addToCart() {
    this.cartService.addToCart(this.product);
  }
  getCartQuantity(): number {
    const cartProduct = this.cartService.cartItems.find((item) => item.id === this.product?.id);

    return cartProduct ? cartProduct.quantity : 0;
  }
  ngOnInit() {
    // Read product ID from URL
    this.productId = this.route.snapshot.paramMap.get('id');

    // Convert string ID into number
    const id = Number(this.productId);

    // Find product using ID
    this.product = this.productService.getProductById(id);

    console.log('Selected Product:', this.product);
  }
}

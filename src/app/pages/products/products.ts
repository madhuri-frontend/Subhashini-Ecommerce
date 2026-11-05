import { Component } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products = [
    {
      id: 1,
      name: 'Lux Soap',
      price: 35,
      stock: 10,
    },
    {
      id: 2,
      name: 'Dairy Milk',
      price: 20,
      stock: 25,
    },
    {
      id: 3,
      name: 'Notebook',
      price: 40,
      stock: 15,
    },
    {
      id: 4,
      name: 'Santoor Soap',
      price: 45,
      stock: 20,
    },
  ];

  showMessage() {
    console.log('Button clicked!');
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  getCartQuantity(product: any): number {
    const cartProduct = this.cartService.cartItems.find((item) => item.id === product.id);

    return cartProduct ? cartProduct.quantity : 0;
  }
  constructor(public cartService: Cart) {}
}

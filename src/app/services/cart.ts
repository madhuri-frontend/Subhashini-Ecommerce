import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cartItems: any[] = [];

  addToCart(product: any) {
    const existingProduct = this.cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({
        ...product,
        quantity: 1,
      });
    }

    console.log('Cart Items:', this.cartItems);
  }
  increaseQuantity(product: any) {
    const cartProduct = this.cartItems.find((item) => item.id === product.id);

    if (cartProduct) {
      cartProduct.quantity++;
    }
  }

  decreaseQuantity(product: any) {
    const cartProduct = this.cartItems.find((item) => item.id === product.id);

    if (cartProduct && cartProduct.quantity > 1) {
      cartProduct.quantity--;
    }
  }
  removeProduct(product: any) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
  }
  getCartCount(): number {
    return this.cartItems.reduce((total, product) => total + product.quantity, 0);
  }
}

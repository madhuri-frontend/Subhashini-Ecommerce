import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  private fb = inject(FormBuilder);

  checkoutForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(10)]],
  });
  placeOrder() {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    const order = {
      orderId: Date.now(),
      customer: this.checkoutForm.value,
      products: this.cartService.cartItems.map((item) => ({
        ...item,
      })),
      totalAmount: this.orderTotal,
      orderDate: new Date(),
      status: 'Placed',
    };

    // Get previously saved orders
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');

    // Add new order
    existingOrders.push(order);

    // Save orders in browser storage
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    alert('Order placed successfully!');

    // Clear form
    this.checkoutForm.reset();

    // Clear cart
    this.cartService.clearCart();
  }
  cartService = inject(Cart);

  get orderTotal(): number {
    return this.cartService.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }
}

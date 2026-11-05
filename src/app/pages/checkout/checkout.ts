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

    console.log('Customer Details:', this.checkoutForm.value);
    alert('Order placed successfully!');
  }
  cartService = inject(Cart);

  get orderTotal(): number {
    return this.cartService.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }
}

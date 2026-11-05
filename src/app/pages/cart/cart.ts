import { Component } from '@angular/core';
import { Cart as CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  constructor(public cartService: CartService) {}
  getTotal() {
    return this.cartService.cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }
}

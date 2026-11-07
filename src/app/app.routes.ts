import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { About } from './pages/about/about';
import { ProductDetails } from './pages/product-details/product-details';
import { Checkout } from './pages/checkout/checkout';
import { AdminOrders } from './pages/admin-orders/admin-orders';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'products/:id',
    component: ProductDetails,
  },
  {
    path: 'checkout',
    component: Checkout,
  },
  {
    path: 'admin/orders',
    component: AdminOrders,
  },
];

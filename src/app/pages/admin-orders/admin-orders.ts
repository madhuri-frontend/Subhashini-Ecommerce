import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-orders',
  imports: [FormsModule],
  templateUrl: './admin-orders.html',
  styleUrl: './admin-orders.scss',
})
export class AdminOrders implements OnInit {
  orders: any[] = [];

  ngOnInit() {
    const savedOrders = localStorage.getItem('orders');

    this.orders = savedOrders ? JSON.parse(savedOrders) : [];

    console.log('Admin Orders:', this.orders);
  }
  updateOrderStatus(order: any, newStatus: string) {
    order.status = newStatus;

    localStorage.setItem('orders', JSON.stringify(this.orders));

    alert('Order status updated successfully!');
  }
  selectedStatus = 'All';
  get filteredOrders() {
    if (this.selectedStatus === 'All') {
      return this.orders;
    }

    return this.orders.filter((order) => order.status === this.selectedStatus);
  }
  searchText = '';
  get searchedOrders() {
    const search = this.searchText.toLowerCase().trim();

    return this.filteredOrders.filter(
      (order) =>
        order.customer.fullName.toLowerCase().includes(search) ||
        order.customer.mobile.includes(search) ||
        order.orderId.toString().includes(search),
    );
  }
}

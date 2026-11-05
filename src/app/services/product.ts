import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  products = [
    {
      id: 1,
      name: 'Lux Soap',
      price: 35,
      stock: 10,
      description: 'Lux Soap for everyday freshness and a refreshing bathing experience.',
    },
    {
      id: 2,
      name: 'Dairy Milk',
      price: 20,
      stock: 25,
      description: 'Delicious Dairy Milk chocolate for a sweet treat.',
    },
    {
      id: 3,
      name: 'Notebook',
      price: 40,
      stock: 15,
      description: 'A quality notebook for everyday writing and notes.',
    },
    {
      id: 4,
      name: 'Santoor Soap',
      price: 45,
      stock: 20,
      description: 'Santoor Soap for a refreshing bathing experience.',
    },
  ];
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}

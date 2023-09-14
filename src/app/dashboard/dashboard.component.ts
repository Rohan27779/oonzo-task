import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  totalSales: number = 80000;
  currentUsers: number = 120000;

  addProduct() {
    const newProduct: Product = {
      id: this.products.length + 1,
      name: `Product ${this.products.length + 1}`,
      price: 0,
    };
    this.products.push(newProduct);
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

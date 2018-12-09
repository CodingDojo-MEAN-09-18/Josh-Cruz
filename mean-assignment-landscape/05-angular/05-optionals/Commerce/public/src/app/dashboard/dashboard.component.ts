import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { Product } from '../models/Product';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Output()
  sendProducts: EventEmitter<any> = new EventEmitter<any>();

  Products: Product[] = [];
  selectedProduct: Product;

  constructor(
    private productService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.displayProducts();
  }

  displayProducts() {
    this.productService.getAllProducts().subscribe(
        response =>
        response.forEach(element => {
          this.Products.push(element);
        }),
      error => console.log('update array error was', error)
    );
  }

//   showDescription(product: Product): void {
//     this.productService.selectedProduct = product;
//     console.log(this.selectedProduct);
//   }
}

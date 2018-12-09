import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../models/Product';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private productService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  selectedProduct;
  id;
  Products = [];
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log('tshis is param', params);
      this.id = params.id;
      console.log('thisid', this.id);
    });
    this.getProduct();
  }

  getProduct() {
    this.productService.findProduct(this.id).subscribe(
      response => {
        console.log('response was ', response);
        this.selectedProduct = response;

      },
      error => console.log(error)
    );
  }

  onDeleteProduct() {
    this.productService.deleteProduct(this.selectedProduct).subscribe(
      response => console.log('deleted', response),
      error => console.log(error)
    );
    this.goHome();
  }

  goHome() {
    this._router.navigate(['/products']);
  }

}

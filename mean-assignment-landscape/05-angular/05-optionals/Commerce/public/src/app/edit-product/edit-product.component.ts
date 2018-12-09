import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormArray, FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private productService: HttpService
  ) {}

  errors: string[] = [];

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

  onUpdateProduct(updateForm: NgForm) {
    const { value: product } = updateForm;
    this.errors = [];
    console.log('form', product, 'this:', this.selectedProduct);
    this.productService
      .updateProduct({ ...this.selectedProduct, ...product })
      .subscribe(
        response => {
          console.log('response was:', response),
          this.goHome();
        },
        error => {
          console.log('this is error.error', error.error);
          error.error.forEach(element => {
            this.errors.push(element);
          }
          );
        }
      );

  }

  goHome() {
    this._router.navigate(['/products']);
  }
}

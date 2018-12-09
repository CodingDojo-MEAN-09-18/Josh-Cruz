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
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  @ViewChild('form') addProductForm: NgForm;
  errors: string[] = [];
  //    <{
  //   name: string, type: string, description: string,
  //   skills: Array<any>
  // }>

  Products = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private productService: HttpService
  ) {}

  onAddProduct(form: NgForm) {
    const { value: product } = form;
    this.errors = [];

    this.productService.createProduct(product).subscribe(
      response => {
        console.log('response', response);
        this.goHome();
      },
      error => {
        console.log(error.error);
        error.error.forEach(element => {
          this.errors.push(element);
        });

      }
    );
  }

  goHome() {
    this._router.navigate(['/products']);
  }
}

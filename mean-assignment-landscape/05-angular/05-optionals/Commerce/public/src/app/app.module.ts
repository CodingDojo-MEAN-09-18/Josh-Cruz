import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AddProductComponent, ProductDetailsComponent, EditProductComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}

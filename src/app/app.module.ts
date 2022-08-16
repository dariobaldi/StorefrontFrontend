import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { PaymentFormComponent } from './cart/payment-form/payment-form.component';
import { PurchaseConfirmationComponent } from './cart/purchase-confirmation/purchase-confirmation.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    NavBarComponent,
    CartComponent,
    CartItemComponent,
    PaymentFormComponent,
    PurchaseConfirmationComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

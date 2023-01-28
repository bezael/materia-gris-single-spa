
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsModule } from './pages/products/details/details.module';

import { ProductsModule } from './pages/products/products.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,  ProductsModule, DetailsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { ProductsService } from './services/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private readonly productsSvc:ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsSvc.getProducts()
  }

}

import { ProductsService } from './../services/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  product$!: Observable<Product>;
  productId!: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productSvc: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params?.['productId'];
    this.product$ = this.productSvc.getProductById(this.productId);
  }

  goBack(): void {
    // TODO: Implement
  }
}

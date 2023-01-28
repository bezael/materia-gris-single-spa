import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent  {
  @Input() product!: Product;
}

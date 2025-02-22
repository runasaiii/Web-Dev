import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone:true,
  imports:[ProductItemComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() category: any;

  removeProduct(product: any) {
    this.category.products = this.category.products.filter((p: any) => p !== product);
  }

  likeProduct(product: any) {
    product.likes += 1;
  }
}

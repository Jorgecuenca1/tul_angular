import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from '../../../service/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()product:Product;

  constructor(private ts : ProductService) { }

  ngOnInit(): void {
    console.log(this.product.id);
  }
  Delete()
  {
    this.ts.deleteProduct(this.product.id).subscribe((data)=>{
      console.log('product deleted: ',data.id);
    });
  }
}

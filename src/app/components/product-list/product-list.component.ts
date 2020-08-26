import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = []; 
  
  constructor(private productservice : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    
    this.productservice.getProducts().subscribe((all)=>{
      this.products=all;
      console.log(this.products);
    });
    
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  nombre:string;
  sku:string;
  descripcion:string;
  precio:string;
  constructor(private ts:ProductService) { }

  ngOnInit(): void {
  }
  Add(e){
    e.preventDefault();
   
    console.log(this.sku);
    console.log(this.descripcion);
    console.log(this.precio);
    this.ts.addProduct(this.nombre,this.sku,this.descripcion,this.precio).subscribe((data)=>{
      console.log("Producto agregado: ");
    });
  }
}

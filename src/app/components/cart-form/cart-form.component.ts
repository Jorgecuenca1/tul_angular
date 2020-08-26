import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../../service/product-cart.service';
@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  status:string;
  
  constructor(private ts:ProductCartService) { }

  ngOnInit(): void {
  }
  Add(e){
    e.preventDefault();
   
    console.log(this.status);
    
    this.ts.addProductCart(this.status).subscribe((data)=>{
      console.log("Productocarro agregado: ");
    });
  }
}

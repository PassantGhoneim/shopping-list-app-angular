import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { SelectedProducts } from '../shared/selected-products.service';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

   cart : Product[];
   

  constructor(private shoppingListService:ShoppingListService,
              private selectedProducts:SelectedProducts
    ) { }

  ngOnInit(): void {
    this.cart=this.selectedProducts.products;


  //  this.cart=this.shoppingListService.getCard().filter(product=>product.quantity>0)
     
     
  }

  removeFromCart(removedProductID:number){

    this.selectedProducts.removeFromCard(removedProductID)
  }

  

}

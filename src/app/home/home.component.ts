import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { SelectedProducts } from '../shared/selected-products.service';
import {ShoppingListService} from '../shared/shopping-list.service'
import { Product } from '../shared/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[]
})
export class HomeComponent implements OnInit {

  searchText:string;

  cards:Product[];

  
  

 

  constructor(private shoppingListService:ShoppingListService,
              private router:Router,
              private route:ActivatedRoute,
              private selectedProducts:SelectedProducts
            
    ) { }

  ngOnInit(): void {


    this.cards=this.shoppingListService.getCard();
  }

  addToCart(selectedProduct:Product){

   

    
    this.selectedProducts.addSelectedProduct(selectedProduct)
  
    

    
    

  }


  
}

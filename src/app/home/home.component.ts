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
  gridflag:boolean=false;

  
  

 

  constructor(private shoppingListService:ShoppingListService,
         
              private selectedProducts:SelectedProducts
            
    ) { }

  ngOnInit(): void {


    this.cards=this.shoppingListService.getCard();
    
    
  }


  // addToCart(productId:number){

  //   for(let product of this.shoppingListService.getCard()){

  //     if(product.id===productId){
  //       product.quantity+=1;
        
  //     }

  //   }
  //   console.log(this.shoppingListService.getCard())

  // }




  addToCart(selectedProduct:Product){

    // console.log(selectedProduct.quantity);
    // if(selectedProduct.quantity===0){
    //   selectedProduct.quantity+=1;
    // console.log(selectedProduct);
    
      
    //   this.selectedProducts.addSelectedProduct(selectedProduct);

    // }
    // else if (selectedProduct.quantity>0){ 

    //   selectedProduct.quantity+=1;
    //   console.log(selectedProduct);
      

    // }
    

    this.selectedProducts.addSelectedProduct(selectedProduct)
  }

  convertToGrid(){
    this.gridflag=!this.gridflag;
   
    
  }


  
}

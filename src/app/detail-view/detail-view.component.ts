import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../shared/product';
import {ShoppingListService} from '../shared/shopping-list.service'

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  idParameter:number;

  totalProducts:Product[];

  shownProduct:Product;

  

  constructor(private shoppingListService:ShoppingListService,
              private route:ActivatedRoute) { 

  }

  ngOnInit(): void {


       this.route.params.subscribe(
      (param:Params)=>this.idParameter=param["id"]);
      console.log(this.idParameter);

      this.totalProducts=this.shoppingListService.getCard()
      for(let product of this.totalProducts){
        if(product.id==this.idParameter){
          this.shownProduct=product;
        }
      }
      console.log(this.shownProduct)





      

        

       

        




    


    
   

      

    // this.route.params.subscribe(
    //   (param:Params)=>{
    //     this.idParameter=param["id"];
    //     for(let product of this.details){
    //       if(product.id===this.idParameter){
    //         return this.viewedProduct=product
            
            
    
    //       }
    //       else {
    //         return this.viewedProduct
    //       }
    //     }
        
    //   }

    // )
    // this.idParameter=this.route.snapshot.params['id']
    // for(let product of this.details){
    //         if(product.id===this.idParameter){
    //           this.viewedProduct=product
              
              
      
    //         }
          
    //       }
    
    


     
  }

}

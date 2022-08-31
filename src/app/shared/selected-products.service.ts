import { Product } from "./product";
export class SelectedProducts{
    products:Product[]=[];
    

     addSelectedProduct(selectedProduct:Product) {
      
      this.products.push(selectedProduct);
        
        

      }
      removeFromCard(selectedProductId:number){
        console.log(this.products)
        for(let i =0;i<=this.products.length;i++){
          if(this.products[i].id===selectedProductId){
            this.products.splice(i,1)
            console.log(this.products)
          }
        }
      }
      
    }
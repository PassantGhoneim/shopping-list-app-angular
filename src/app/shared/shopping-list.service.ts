import { Product } from "./product";
export class ShoppingListService{
   private cards:Product[]=[
        {
            url:"../../assets/BourjoisBlusher.jpg",
            name:"Bourjois Blusher",
            category:"Blusher",
            price:250,
            id:1,
            quantity:0
            
        },

        {
           url:"../../assets/BourjoisMascara.jpg",
           name:"Bourjois Mascara",
           category:"Mascara",
           price:300,
           id:2,
           quantity:0
        },
        {
            url:"../../assets/RimmelBronser.jpg",
            name:"Rimmel Bronzer",
            category:"Bronzer",
            price:350 ,
            id:3,
            quantity:0
         },

        { 
            url:"../../assets/RimmelMascara.jpg",
            name:"Rimmel Mascara",
            category:"Mascara",
            price:350,
            id:4,
            quantity:0
         },

        {
            url:"../../assets/MaybellineMascara.jpg",
            name:"Maybelline Mascara",
            category:"Mascara",
            price:240 ,
            id:5,
            quantity:0
        },

        { 
            url:"../../assets/MaybellineBlusher.jpg",
            name:"Maybelline Blusher",
            category:"Blusher",
            price:250 ,
            id:6,
            quantity:0

        },

        {
            url:"../../assets/MaxFactorBlush.jpg",
            name:"MaxFactor Blusher",
            category:"Blusher",
            price:370,
            id:7,
            quantity:0
        },

        {
            url:"../../assets/LorealMascara.jpg",
            name:"Loreal Mascara",
            category:"Mascara",
            price:250  ,
            id:8,
            quantity:0
        },
        
        {
            url:"../../assets/kikoEyeshadow.jpg",
            name:"kiko Eyeshadow",
            category:"kikoEyeshadow",
            price:500 ,
            id:9,
            quantity:0
        }
    ]

    getCard(){
        return this.cards.slice();
    }
}
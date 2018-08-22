// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../../models/productInfo';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor() {
  }

  public products:Array<Product>= [
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/MostPopular1.jpg",
      ptitle:"Beef Bibimbap",
      pdescription:"Rice, assorted vegetables, and beef."
    },
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/MostPopular2.jpg",
      ptitle:"Snow Cheese Chicken",
      pdescription:"Grated cheese with sprinkled parsley."
    },
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/MostPopular2.jpg",
      ptitle:"Snow Cheese Chicken",
      pdescription:"Grated cheese with sprinkled parsley."
    },
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/MostPopular2.jpg",
      ptitle:"Snow Cheese Chicken",
      pdescription:"Grated cheese with sprinkled parsley."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken1.jpg",
      ptitle:"Spicy Chilli Gangjung",
      pdescription:"Smoked spicy chilli sauce medium spicy."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice1.jpg",
      ptitle:"Kimchi Fried Rice",
      pdescription:"Stir fried kimchi rice and egg on top."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup1.jpg",
      ptitle:"Vegetable Soft Tofu Soup",
      pdescription:"Rice, soft tofu, egg, and vegetables."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle1.jpg",
      ptitle:"Black Bean Noodles",
      pdescription:"Black bean sauce, noodles, chopped onion."
    },
    {
      ptype:"Extras",
      pimage:"../../assets/productImage/extra1.jpg",
      ptitle:"Large Shoe String Chips",
      pdescription:"None."
    },
    {
      ptype:"Drinks",
      pimage:"../../assets/productImage/drink1.jpg",
      ptitle:"Coke",
      pdescription:"375 mL."
    }
  ];

}

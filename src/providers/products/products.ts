// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../../models/productInfo';
// import { User } from '../../models/userInfo'

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor() {
  }

//user info gonna be at firebase later, so did not set up the password
  // public users:Array<User>= [{
  //   username:"Bob",
  //   password:"none",
  //   rewardRecords:"../../assets/productImage/ICGChicken.png"
  // }];

  public products:Array<Product>= [
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/rice10.jpg",
      ptitle:"Beef Bibimbap",
      pdescription:"Rice, assorted vegetables, and beef."
    },
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/rice2.jpg",
      ptitle:"La Galbi",
      pdescription:"Beef ribs and rice."
    },
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/soup4.jpg",
      ptitle:"Seafood Soft Tofu Soup",
      pdescription:"Rice, soft tofu, egg, seafood, and vegetables."
    },
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/chicken3.jpg",
      ptitle:"Spring Onion Chicken",
      pdescription:"Wasabi taste sauce with spring onion on top."
    },
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/chicken2.jpg",
      ptitle:"Sweet and Spicy Chicken",
      pdescription:"Sweet and spicy sauce with sprinkled ground peanuts o..."
    },
    {
      ptype:"MostPopular",
      pimage:"../../assets/productImage/chicken4.jpg",
      ptitle:"Snow Cheese Chicken",
      pdescription:"Grated cheese with sprinkled parsley."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken1.jpg",
      ptitle:"Original Fried Chicken",
      pdescription:"Fried chicken."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken2.jpg",
      ptitle:"Sweet and Spicy Chicken",
      pdescription:"Sweet and spicy sauce with sprinkled ground peanuts on ..."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken3.jpg",
      ptitle:"Spring Onion Chicken",
      pdescription:"Wasabi taste sauce with spring onion on top."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken4.jpg",
      ptitle:"Snow Cheese Chicken",
      pdescription:"Grated cheese with sprinkled parsley."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken5.jpg",
      ptitle:"Creamy Onion Chicken",
      pdescription:"Rich creamy onion sauce with sliced onion on top."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken6.jpg",
      ptitle:"Spicy Chilli Gangjung",
      pdescription:"Smoked spicy chilli sauce medium spicy."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken7.jpg",
      ptitle:"Soy Sauce Gangjung",
      pdescription:"Rich savory soy sauce with ground garlic."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken8.jpg",
      ptitle:"Spicy Garlic Gangjung",
      pdescription:"Spicy savory soy sauce with chopped garlic."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken9.jpg",
      ptitle:"Hot and Spicy Gangjung",
      pdescription:"Spiciest chicken."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken10.jpg",
      ptitle:"Incredible Gangjung",
      pdescription:"Sweet cinnamon based soy sauce chicken."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken11.jpg",
      ptitle:"Tender Long Chicken",
      pdescription:"Juicy, nutritious breast fillet. Served with choice of sauce."
    },
    {
      ptype:"Chicken",
      pimage:"../../assets/productImage/chicken12.jpg",
      ptitle:"10 Mid Wings",
      pdescription:"10 of the juicy and crispy middle mings"
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice1.jpg",
      ptitle:"Kimchi Fried Rice",
      pdescription:"Stir fried kimchi rice and egg on top."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice2.jpg",
      ptitle:"La Galbi",
      pdescription:"Beef ribs and rice."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice3.jpg",
      ptitle:"Jjajangbap",
      pdescription:"Black bean sauce, rice, and egg."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice4.jpg",
      ptitle:"Bulgogi Topping rice",
      pdescription:"Stir fried beef, rice, and vegetables."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice5.jpg",
      ptitle:"Squid Topping Rice",
      pdescription:"Stir fried spicy squid, rice, and vegetables."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice6.jpg",
      ptitle:"Pork Topping Rice",
      pdescription:"Stir fried spicy pork, rice, and vegetables."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice7.jpg",
      ptitle:"Octopus Topping Rice",
      pdescription:"Stir fried spicy octopus, rice, and vegetables."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice8.jpg",
      ptitle:"Chicken topping rice",
      pdescription:"Stir fried spicy chicken, rice, and vegetables."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice9.jpg",
      ptitle:"Vegetable Bibimbap",
      pdescription:"Rice and assorted vegetables."
    },
    {
      ptype:"Rice",
      pimage:"../../assets/productImage/rice10.jpg",
      ptitle:"Beef Bibimbap",
      pdescription:"Rice, assorted vegetables, and beef."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup1.jpg",
      ptitle:"Vegetable Soft Tofu Soup",
      pdescription:"Rice, soft tofu, egg, and vegetables."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup2.jpg",
      ptitle:"Beef Soft Tofu Soup",
      pdescription:"Rice, soft tofu, beef, egg, and vegetables."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup3.jpg",
      ptitle:"Dumpling Soft Tofu Soup",
      pdescription:"Rice, soft tofu, seafood dumplings, egg, and..."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup4.jpg",
      ptitle:"Seafood Soft Tofu Soup",
      pdescription:"Rice, soft tofu, egg, seafood, and vegetables."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup5.jpg",
      ptitle:"Seafood Soy Bean Soup",
      pdescription:"Rice, Korean soy bean, seafood, and vegetables."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup6.jpg",
      ptitle:"Beef Brisket Soy Bean Soup",
      pdescription:"Rice, Korean soy bean, beef brisket, and vegetables."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup7.jpg",
      ptitle:"Ginseng Chicken Soup",
      pdescription:"Rice, whole chicken, garlic, dates, ginseng, and shallot."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup8.jpg",
      ptitle:"Spicy Mixed Soup",
      pdescription:"Rice, ham, sausages. kimchi, tofu, beans, vegetables, and..."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup9.jpg",
      ptitle:"Rice Cake Dumpling Soup",
      pdescription:"Seafood dumplings and rice cakes."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup10.jpg",
      ptitle:"Spicy Pork Bone Soup",
      pdescription:"Rice, pork bones, and vegetables."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup11.jpg",
      ptitle:"Kimchi Stew",
      pdescription:"Rice, kimchi, pork, tofu and vegetables."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup12.jpg",
      ptitle:"Spicy Beef Stew",
      pdescription:"Rice, beef, bean sprouts, mushroom, potato noodles,..."
    },
    {
      ptype:"Soup",
      pimage:"../../assets/productImage/soup13.jpg",
      ptitle:"Spicy Soup Toppoki",
      pdescription:"Rice cakes, vegetables, fish cakes, and chili sauce."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle1.jpg",
      ptitle:"Black Bean Noodles",
      pdescription:"Black bean sauce, noodles, chopped onion and..."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle2.jpg",
      ptitle:"Seafood Stir Fry Black Bean noodles",
      pdescription:"Black bean sauce, chopped onion, grounded pork, and..."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle3.jpg",
      ptitle:"Udon Noodle Soup",
      pdescription:"Seafood dumplings, udon, and vegetable."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle4.jpg",
      ptitle:"Stir Fry Seafood Udon",
      pdescription:"Seafood, udon, and teriyaki sauce."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle5.jpg",
      ptitle:"Seafood Jabchae",
      pdescription:"Potato noodles. seafood, vegetables, and soy sauce."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle6.jpg",
      ptitle:"Beef Jabchae",
      pdescription:"Potato noodles. beef, vegetables, and soy sauce."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle7.jpg",
      ptitle:"Vegetable Jabchae",
      pdescription:"Potato noodles, vegetables and soy sauce."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle8.jpg",
      ptitle:"Cold Noodles",
      pdescription:"Buckwheat noodles, pickled faddish, pickled cucumber,..."
    },
    {
      ptype:"Noodles",
      pimage:"../../assets/productImage/noodle9.jpg",
      ptitle:"Spicy Cold Noodles",
      pdescription:"Buckwheat noodles, pickled faddish, pickled cucumber,..."
    },
    {
      ptype:"Extras",
      pimage:"../../assets/productImage/extra1.jpg",
      ptitle:"Large Shoe String Chips",
      pdescription:"None."
    },
    {
      ptype:"Extras",
      pimage:"../../assets/productImage/extra2.jpg",
      ptitle:"Dumplings",
      pdescription:"Fried or Steamed."
    },
    {
      ptype:"Drinks",
      pimage:"../../assets/productImage/drink1.jpg",
      ptitle:"Coke",
      pdescription:"375 mL."
    },
    {
      ptype:"Drinks",
      pimage:"../../assets/productImage/drink2.jpg",
      ptitle:"Sprite",
      pdescription:"375 mL."
    }
  ];

}

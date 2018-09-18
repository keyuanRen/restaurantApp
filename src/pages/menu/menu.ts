import { Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

// import { ProductsProvider } from '../../providers/products/products';
//import { Product } from '../../models/productInfo';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  @ViewChild('swipedTabSlider') swipedTabSlider: Slides;

  swipedTabIndicator : any = null;
  tabs: any =[];

  products: Array<any> = [];
  constructor(public navCtrl: NavController, public http: HttpClient, private afDatabase: AngularFireDatabase) {
    this.tabs=["MostPopular", "Chicken", "Rice", "Soup", "Noodles", "Extras", "Drinks"];
  }

  ionViewDidLoad(){
    this.afDatabase.object('products/').snapshotChanges().subscribe(
    (action)=>{
      if(action.payload.val())
      {
        console.log(action.payload.val());
        let items: any = action.payload.val();
        items.forEach(
          (product) =>{
            this.products.push(product);
          }
        );
      }
      else
      {
        console.log("None Data");
      }
  });
}

  showTypeOfProduct(type)
  {
    let items:any = [];
    this.products.forEach((Product)=>{
      if(Product.ptype == type)
      {
        items.push(Product);
      }
    });
    return items;
  }

  ionViewDidEnter()
  {
    this.swipedTabIndicator = document.getElementById("indicator");
  }

  selectTab(index)
  {
    this.swipedTabIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.swipedTabSlider.slideTo(index, 500);
  }

  updateIndicatorPosition()
  {
    if( this.swipedTabSlider.length() > this.swipedTabSlider.getActiveIndex())
    {
      this.swipedTabIndicator.style.webkitTransform = 'translate3d(' + (this.swipedTabSlider.getActiveIndex()*100)+'%,0,0)';
    }
  }

  animateIndicator($event)
  {
    if(this.swipedTabIndicator)
    this.swipedTabIndicator.style.webkitTransform = 'translate3d(' + ($event.progress*(this.swipedTabSlider.length()-1));
  }

}

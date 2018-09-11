import { Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { ProductsProvider } from '../../providers/products/products';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  @ViewChild('swipedTabSlider') swipedTabSlider: Slides;

  swipedTabIndicator : any = null;
  tabs: any =[];

  constructor(public navCtrl: NavController, public http: HttpClient, public product: ProductsProvider) {
    this.tabs=["MostPopular", "Chicken", "Rice", "Soup", "Noodles", "Extras", "Drinks"];
  }

  showTypeOfProduct(type)
  {
    let items:Array<any> = [];
    this.product.products.forEach((Product)=>{
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

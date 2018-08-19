
import { Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  @ViewChild('swipedTabSlider') swipedTabSlider: slides;

  swipedTabIndicator : any= null;
  tabs:any=[];

  constructor(public navCtrl: NavController) {
    this.tabs=["page1", "page2", "page3", "page4"];
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
//private fireAuth: AngularFireAuth,
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
  public toast: ToastController) {
  }

  async confirmLogin(user: User){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result)
      {
        this.navCtrl.push(TabsPage);
      }

    }
    catch(e){
      this.toast.create({
        message: 'Wrong Password or Email!',
        duration: 3000
      }).present();
    //  console.error(e);

    }
  }

  fogetPassword(email){
    this.afAuth.auth.sendPasswordResetEmail(email.toString())
    .then(data => {
      this.toast.create({
        message: 'Check Your Email',
        duration: 3000
      }).present();

    })
    .catch(data => {
      this.toast.create({
        message: 'Wrong Email',
        duration: 3000
      }).present();
      //console.log("Error");
    })
  }
}

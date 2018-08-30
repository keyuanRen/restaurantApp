import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { User } from '../../models/userInfo';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private fireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegisterPage');
  // }

  async confirmRegister(user: User){
    try
    {
      const info =await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

      if(info)
      {
        this.navCtrl.push(LoginPage);
      }
    }
    catch(e)
    {
      console.error(e);
    }

  }

}

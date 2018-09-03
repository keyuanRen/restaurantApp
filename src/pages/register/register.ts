import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from '../profile/profile';
//import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async confirmRegister(user: User){
    try
    {
      const result =await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

      if(result)
      {
        this.navCtrl.push(ProfilePage);
      }
    }
    catch(e)
    {
      console.error(e);
    }

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProfile } from '../../models/userProfile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { LoginPage } from '../login/login';

import QRCode from 'qrcode';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as UserProfile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  createUserProfile(){
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.profile.username, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.profile.userQR = url;
    })

    self.profile.userScord = null;

    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object('userProfile/${auth.uid}').set(this.profile)
      .then(() => this.navCtrl.setRoot(LoginPage));
    })
  }

}

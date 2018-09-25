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

    this.afAuth.authState.subscribe(data => {
      let id: any = data.uid;

      qrcode.toDataURL(id, { errorCorrectionLevel: 'H' }, function (err, url) {
        self.profile.userQR = url;
    })
    });

    self.profile.userScord = 0;

    this.afAuth.authState.take(1).subscribe(auth => {
      let path= 'userProfile'+'/'+ auth.uid;
      this.afDatabase.object(path).set(this.profile)
      .then(() => this.navCtrl.setRoot(LoginPage));
    })
  }

}

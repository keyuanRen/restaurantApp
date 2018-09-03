import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from '@ionic-native/barcode-scanner';

import { UserProfile } from '../../models/userProfile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AnuglarFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  // options: BarcodeScannerOptions;
  // encodeText:string='';
  // encodedData:any={};
  // scannedData:any={};
  // result: BarcodeScanResult;
  // dataTOEncode: string;

// public barcode: BarcodeScanner,
  profileInfo: FirebaseObjectObservable<UserProfile>

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public user: ProductsProvider) {
  }

  viewUserInformation(){
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: 'Welcome',
          duration: 3000
        }).present();

        this.profileInfo = this.afDatabase.object('userProfile/${data.uid}')
      }
      else
      {
        this.toast.create({
          message: 'Have Not Log In',
          duration: 3000
        }).present();
      }
    })
  }

  logOut(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  // async encodeData(){
  //   try{
  //     await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.dataTOEncode);
  //   }
  //   catch(error){
  //     console.error(error);
  //   }
  // }

  // async scanBarcode(){
  //   try{
  //     const options: BarcodeScannerOptions={
  //       prompt: 'Point your camera at a QR code',
  //       torchOn: true
  //     }
  //     this.result= await this.barcode.scan(options);
  //   }
  //   catch(error){
  //     console.error(error);
  //   }
  // }

}

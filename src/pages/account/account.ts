import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
//import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from '@ionic-native/barcode-scanner';

import { UserProfile } from '../../models/userProfile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
//import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { ToastController } from 'ionic-angular';

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
  profileInfo: any;
  user: boolean;
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public toast: ToastController, public app: App) {
  }

  viewUserInformation(){
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.email && data.uid)
      {
        this.user = true;
        this.toast.create({
          message: 'Welcome',
          duration: 3000
        }).present();

        let path= 'userProfile'+'/'+ data.uid;
        this.profileInfo = this.afDatabase.object(path);
        console.log(this.profileInfo.username);

      }
      else
      {
        this.toast.create({
          message: 'Have Not Log In',
          duration: 3000
        }).present();
      }
      this.user = false;
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

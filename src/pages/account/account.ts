import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from '@ionic-native/barcode-scanner';

import { ProductsProvider } from '../../providers/products/products';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  // options: BarcodeScannerOptions;
  // encodeText:string='';
  // encodedData:any={};
  // scannedData:any={};
  result: BarcodeScanResult;
  dataTOEncode: string;

  constructor(public navCtrl: NavController, public barcode: BarcodeScanner, public user: ProductsProvider, public app: App) {
  }

  // displayUserInfo(username)
  // {
  //   let items:Array<any> = [];
  //   if(this.user.users.username == username)
  //   {
  //     items.push(User);
  //   }
  //   return items;
  // }

  logOut(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  async encodeData(){
    try{
      await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.dataTOEncode);
    }
    catch(error){
      console.error(error);
    }
  }

  async scanBarcode(){
    try{
      const options: BarcodeScannerOptions={
        prompt: 'Point your camera at a QR code',
        torchOn: true
      }
      this.result= await this.barcode.scan(options);
    }
    catch(error){
      console.error(error);
    }
  }

}

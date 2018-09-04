import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { CoverPage} from '../pages/cover/cover';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { Firebase_info } from './firebaseInfo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsProvider } from '../providers/products/products';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    MenuPage,
    HomePage,
    CoverPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Firebase_info),
    AngularFireDatabaseModule,
    //FirebaseObjectObservable,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    MenuPage,
    HomePage,
    CoverPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsProvider
  ]
})
export class AppModule {}

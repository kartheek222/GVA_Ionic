import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the Splash page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'splash.html'
})
export class SplashPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl;

    setTimeout(function(){
      navCtrl.setRoot(LoginPage);
    }, 500);
  }
}

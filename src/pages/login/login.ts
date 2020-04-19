import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


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

  responseData: any;
  userData = { "username": "", "password": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider ) {
  }

  login() {
    this.authService.postData(this.userData).then((result) => {
      this.responseData = result;
      if (this.responseData.success) {
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData.message));
        this.navCtrl.push(HomePage, {}, { animate: false });
      }
      else { console.log("User Credentials Not Matched"); }
    }, (err) => {
        console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

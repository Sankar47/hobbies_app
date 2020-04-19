import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData: any;
  user = { username: '', password: ''}

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  saveUser() {
    this.restProvider.addUser(this.user).then((result) => {
      this.responseData = result;
      if (this.responseData.success) {
        console.log(result);
        this.navCtrl.push(LoginPage, {}, { animate: false });
      }
      else { console.log("User already exists"); }
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}

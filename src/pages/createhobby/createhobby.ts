import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';


/**
 * Generated class for the CreatehobbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createhobby',
  templateUrl: 'createhobby.html',
})
export class CreatehobbyPage {
  
  responseData: any;
  hobby = {
    userid: '',
    hobbyname: '',
    description: '',
    portfoliolinks: '',
    timeslots: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  saveHobby() {
    this.hobby["userid"] = JSON.parse(localStorage.getItem('userData')).userid;
    this.restProvider.addHobby(this.hobby).then((result) => {
      this.responseData = result;
      if (this.responseData.success) {
        console.log(result);
        this.navCtrl.push(HomePage, {}, { animate: false });
      }
      else { console.log("hobby already exists"); }
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatehobbyPage');
  }

}

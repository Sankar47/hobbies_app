import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RestProvider } from '../../providers/rest/rest';
import { CreatehobbyPage } from '../createhobby/createhobby';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDetails: any;
  responseData: any;
  hobbies: any;

  userPostData = { "user_id": "", "token": "" };

  CreatehobbyPage(){
    this.navCtrl.push(CreatehobbyPage, {}, { animate: false });
  }

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public restProvider: RestProvider) {
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);
    this.userDetails = data;

    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;

    this.getAllHobbies();

  }

  getAllHobbies() {
    this.restProvider.getHobbies()
      .then(data => {
        this.responseData = data;
        this.hobbies = this.responseData.message
        console.log(this.hobbies);
      });
  }
}

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthenticationService } from '../app/services/authentication.service'
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthenticationService,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.initializeApp();
  }


  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Menu',
      url: '/menu',
      icon: 'pizza'
    },
    {
      title:'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Sign-out',
      icon: 'log-out',
      handles: this.logout(),
    }
  ];



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.auth.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('/home');
    })
    .catch(error => {
      console.log(error);
    })
  }
}

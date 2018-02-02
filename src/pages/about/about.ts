import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
              private iab: InAppBrowser) {

  }

  openGithub() {
    let url = 'https://github.com/HurmuzacheCiprian';
    this.iab.create(url);
  }

  openTwitter() {
    let url = 'https://twitter.com/cchurmuzache';
    this.iab.create(url);
  }
}

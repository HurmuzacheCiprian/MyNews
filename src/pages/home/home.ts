import {NavController, NavParams} from 'ionic-angular';
import {NewsService} from "./news.service";
import {Component} from "@angular/core";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {SocialSharing} from '@ionic-native/social-sharing';


@Component({
  templateUrl: './news/news.html',
})
export class NavigationDetailsPage {
  news;

  constructor(params: NavParams,
              private iab: InAppBrowser,
              private socialSharing: SocialSharing) {
    this.news = params.data.item;
  }

  openBrowser(url) {
    this.iab.create(url)
  }

  shareWithWhatsapp(news) {
    this.socialSharing.shareViaWhatsApp(news.url, news.url)
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  countries = ['ro', 'us', 'gb'];
  headlinesMap = {};
  headlines = null;

  constructor(public navCtrl: NavController,
              private newsService: NewsService) {
    this.getHeadLines(null);
  }

  private getHeadLines(refresher) {
    for (let country of this.countries) {
      this.newsService
        .getHeadlines(country)
        .subscribe(
          data => {
            this.headlinesMap[country] = data["articles"];
            if (refresher != null) {
              refresher.complete();
            }
          }
        );
    }
  }

  doRefresh(refresher) {
    this.getHeadLines(refresher);
  }

  openNews(h) {
    this.navCtrl.push(NavigationDetailsPage, {item: h});
  }
}

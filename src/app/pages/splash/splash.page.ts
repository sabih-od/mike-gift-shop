import { Component, Injector, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  bgLoaded = false;
  showLogo = false;
  showLogButtons = false;
  fullbackground: any;
  long_logo: any;
  constructor(private iab: InAppBrowser) {}

  ngOnInit() {
    this.initialize();
  }

  ionViewWillEnter() {
    this.initialize();
  }

  async initialize() {}

  updateBackgroundView() {
    this.bgLoaded = true;

    setTimeout(() => {
      // Browser.open({
      //   url: 'https://mikegiftshop.com/product-category/organic-hemp-cbd-oil/',
      // });
      // window.open(
      //   'https://mikegiftshop.com/product-category/organic-hemp-cbd-oil/',
      //   '_blank',
      //   'location=no'
      // );
      //  //  //
      // this.nav.push("pages/home");
      // window.open(
      //   'https://mikegiftshop.com/product-category/organic-hemp-cbd-oil/',
      //   '_blank',
      //   'location=no,toolbar=no'
      // );
      let encodedUrl = encodeURI(
        'https://mikegiftshop.com/product-category/organic-hemp-cbd-oil/'
      );
      this.iab.create(encodedUrl, '_blank', {
        location: 'no', //Or 'no'
        //hidden : 'yes', //Or  'yes'
        toolbar: 'no',
        zoom: 'no', //Android only ,shows browser zoom controls
        hideurlbar: 'yes', //Or 'no'
      });
    }, 5000);
  }
}

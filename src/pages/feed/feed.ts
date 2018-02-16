import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  nomeUsuario: string = "Karine Rocha Código";

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  soma(n1: number, n2: number) {
    alert( n1+n2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
   // this.soma(1,2);
  }

}

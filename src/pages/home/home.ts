import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BarcodeData} from '../scan/scan';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeData: BarcodeData;
  articles: any;

constructor(public navCtrl: NavController, navParams: NavParams) {
  this.barcodeData = navParams.get('details');
   this.articles = [
            'Tapis',
            'Matelas',
            'Couvre-Lit',
            'Oreiller',
            'Drap',
        ];
}

}

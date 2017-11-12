import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BarcodeData} from '../scan/scan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeData: BarcodeData;
constructor(public navCtrl: NavController, navParams: NavParams) {
  this.barcodeData = navParams.get('details');
}

}

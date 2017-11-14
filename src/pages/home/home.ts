import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Information} from '../scan/scan';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeInformation: Information;
  articles: any;
  serialNumber : any;

constructor(public navCtrl: NavController, navParams: NavParams) {
  this.barcodeInformation = navParams.get('barcodeInformations');
   this.articles = [
            'Tapis',
            'Matelas',
            'Couvre-Lit',
            'Oreiller',
            'Drap',
        ];
        this.serialNumber = this.barcodeInformation.serialNumber;
}

ionViewDidLoad() {
    
  }

  getItems() {
    this.serialNumber = this.barcodeInformation.serialNumber;
  }

}

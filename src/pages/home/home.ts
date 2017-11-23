import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { ShareService } from '../../services/share/share';
import { Serializer } from '@angular/compiler/src/i18n/serializers/serializer';
import {BarcodeData} from '../scan/scan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeInformation: string;
  articles: Array<BarcodeData>;
  serialNumber : any;

constructor(public navCtrl: NavController, private navParams: NavParams,
   shareService: ShareService) {
    this.articles = shareService.barcodeInformations;
}

ionViewDidEnter() {
    }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  click() {
    this.barcodeScanner.scan()
      .then((result) => {
        if (!result.cancelled) {
          const barcodeData = new BarcodeData(result.text, result.format);
          this.scanDetails(barcodeData);
        }
      })
      .catch((err) => {
        alert(err);
      })
  }

  scanDetails(details) {
    this.navCtrl.push(ScanPage, {details: details});
  }

  AddItem(){
  const barcodeInformations = new Information("ABC" , 2);
    this.navCtrl.push(HomePage, {barcodeInformations: barcodeInformations});
  }


}

export class BarcodeData {
  constructor(
    public text: String,
    public format: String
  ) {

  }
}

export class Information {
    constructor(public serialNumber: any, public quantity: number) {}
}

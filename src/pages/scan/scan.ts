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
    this.navCtrl.push(HomePage, {details: details});
  }


}

export class BarcodeData {
  constructor(
    public text: String,
    public format: String
  ) {

  }
}

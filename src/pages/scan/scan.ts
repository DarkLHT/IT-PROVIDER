import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ShareService } from '../../services/share/share';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  barcode: string;
  serialNumber: string;
  commentaire: string;
  quantite: number;
  name: string;
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner,
     public shareService: ShareService) {
  }

  click() {
    this.barcodeScanner.scan()
      .then((result) => {
        if (!result.cancelled) {
          const barcodeData = new BarcodeData(result.text);
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
    const barcodeData = new BarcodeData(this.barcode, this.serialNumber, this.quantite , this.name);
    this.shareService.pushBarcodeInformation(barcodeData);
  }
}



export class BarcodeData {
  barcode: string;
  serialNumber: string;
  quantite: number;
  name: string;

  constructor(private Barcode: string, private SerialNumber?: string,
              private Quantite?: number, private Name?: string) {
    this.barcode = Barcode;
    this.serialNumber = SerialNumber;
    this.quantite = Quantite;
    this.name = Name;
}
}

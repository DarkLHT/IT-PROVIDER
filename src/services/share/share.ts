import { Injectable } from '@angular/core';
import {BarcodeData} from '../../pages/scan/scan';
 
@Injectable()
export class ShareService {
    public barcodeInformations: Array<BarcodeData>;
    constructor() {
        this.barcodeInformations = [];
    }
  
    public pushBarcodeInformation(information) {
        this.barcodeInformations.push(information);
    }

    public removeItem(item) {
        let index = this.barcodeInformations.indexOf(item);
        
        if(index > -1){
            this.barcodeInformations.splice(index, 1);
        }
    }
}
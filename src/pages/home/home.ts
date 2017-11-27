import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { ShareService } from '../../services/share/share';
import { Serializer } from '@angular/compiler/src/i18n/serializers/serializer';
import {BarcodeData} from '../scan/scan';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeInformation: string;
  articles: Array<BarcodeData>;
  serialNumber: any;
  noItem: boolean;

constructor(public navCtrl: NavController, private navParams: NavParams,
   public shareService: ShareService, private file: File) {
    this.articles = shareService.barcodeInformations;
    this.noItem = true;
}

ionViewDidEnter() {
  this.noItem = this.HasNoItem();
  }

    deleteItem(barcodeData){
      this.shareService.removeItem(barcodeData);
      this.noItem = this.HasNoItem();
    }

    HasNoItem(){
      return this.articles.length == 0;
     }


    ConvertToCSV(){
      
      var jsonObject = JSON.stringify(this.articles);
      var array = typeof jsonObject != 'object' ? JSON.parse(jsonObject) : jsonObject;
      var str = '';

      for (var i = 0; i < array.length; i++) {
          var line = '';
      for (var index in array[i]) {
          if (line != '') line += ','

          line += array[i][index];
      }

      str += line + '\r\n';
      var jsonObject = JSON.stringify(str);
      
      console.log(str);
      }
      return str;
    }
    SaveAsCsv() {
      var csv: any = this.ConvertToCSV();
  
      var fileName: any = "test.csv";
      this.file.writeFile(this.file.dataDirectory, fileName, csv)
        .then(
        _ => {
          console.log("Yes");
          alert('Success ;-)')
        }
        )
        .catch(
        err => {
          console.log("No");
          alert('Failure');             
        }
        )
  
    }
  
}

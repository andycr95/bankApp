import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {}

  takeTransacion(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.router.navigate(['/transaction', barcodeData.text]);
    }).catch(err => {
        console.log('Error', err);
    });
  }
}

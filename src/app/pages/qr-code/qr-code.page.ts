import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  private elementType = 'app';
  private value = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.value = this.route.snapshot.paramMap.get('id');
  }

}

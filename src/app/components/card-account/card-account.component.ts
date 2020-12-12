import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.scss'],
})
export class CardAccountComponent implements OnInit {
  @Input() public account;
  @Input() public goToDetails;
  constructor(public router: Router) { }

  ngOnInit() {
  }
}

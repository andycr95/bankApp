import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-transaction',
  templateUrl: './card-transaction.component.html',
  styleUrls: ['./card-transaction.component.scss'],
})
export class CardTransactionComponent implements OnInit {
  @Input() public transaction;

  constructor() { }

  ngOnInit() {}

}

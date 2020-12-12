import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTransactionComponent } from './card-transaction.component';



@NgModule({
  declarations: [CardTransactionComponent],
  imports: [
    CommonModule
  ],
  exports: [CardTransactionComponent]
})
export class CardTransactionModule { }

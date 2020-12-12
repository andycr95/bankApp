import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPaymentComponent } from './card-payment.component';



@NgModule({
  declarations: [CardPaymentComponent],
  imports: [
    CommonModule
  ],
  exports: [CardPaymentComponent]
})
export class CardPaymentModule { }

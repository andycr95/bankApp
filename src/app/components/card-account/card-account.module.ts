import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAccountComponent } from './card-account.component';



@NgModule({
  declarations: [CardAccountComponent],
  imports: [
    CommonModule
  ],
  exports: [CardAccountComponent]
})
export class CardAccountModule { }

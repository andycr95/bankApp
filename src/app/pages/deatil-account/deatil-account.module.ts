import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeatilAccountPageRoutingModule } from './deatil-account-routing.module';
import { CardTransactionModule } from '../../components/card-transaction/card-transaction.module';

import { DeatilAccountPage } from './deatil-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardTransactionModule,
    DeatilAccountPageRoutingModule
  ],
  declarations: [DeatilAccountPage]
})
export class DeatilAccountPageModule {}

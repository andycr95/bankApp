import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-deatil-account',
  templateUrl: './deatil-account.page.html',
  styleUrls: ['./deatil-account.page.scss'],
})
export class DeatilAccountPage implements OnInit {

  private showHeader = false;
  private showContent = false;
  private account: any;
  private transactions: any = [];
  constructor(public accountService: AccountService, public loadingController: LoadingController, public transactionService: TransactionService,
    private route: ActivatedRoute ) {}

  ngOnInit() {
    this.get();
    this.getTransactions();
  }

  get(){
    this.accountService.getAccount(this.route.snapshot.paramMap.get('id')).subscribe((res:any) => {
      this.account = res.data;
      this.showHeader = true;
    })
  }

  async getTransactions(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 2000
    });
    await loading.present();
    this.transactionService.getTransactions(this.route.snapshot.paramMap.get('id')).subscribe(async (res:any) => {
      this.transactions = res.data;
      this.showContent = true;
      loading.dismiss();
    })
  }

}

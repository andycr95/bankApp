import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private accounts = [];
  private wellcome = '';
  private name = '';
  constructor(public accountService: AccountService, public loadingController: LoadingController, public router: Router) {
    router.events
			.pipe()
			.subscribe(
				( event: NavigationStart ) => {
					if (event.url == '/') {
            this.get();
          }
				}
			)
  }

  ngOnInit() {
    this.name = localStorage.getItem('NAME');
    this.get();
    this.getWellcome();
  }

  async get(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 2000
    });
    await loading.present();
    this.accountService.getAccounts().subscribe((res:any) => {
      this.accounts = res.data;
      loading.dismiss();
    })
  }

  async doRefresh(event) {
    await this.get();
    event.target.complete();
  }

  goToDetails(id: String, router) {
    router.navigate(['/detail-account', id]);
  }

  getWellcome(){
    var today = new Date();
    var time = today.getHours();
    if (time >= 12 && time <= 19) {
      this.wellcome = 'Buenas tardes';
    } else if (time >= 0 && time <= 11){
      this.wellcome = 'Buenos dias';
    } else {
      this.wellcome = 'Buenas noches'
    }
  }
}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private wellcome = '';
  private name = '';

  constructor(private userService: AuthService) {}

  ngOnInit() {
    this.name = localStorage.getItem('NAME');
    this.getWellcome();
  }

  logout(){
    this.userService.logout();
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

import { LoadingController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private watch = this.geolocation.watchPosition();
  private city = '';
  private weather = {};
  private loading = true;
  private type = true;
  private spinner: any;
  constructor(private geolocation: Geolocation, private weatherService: WeatherService, public loadingController: LoadingController) {
    this.initLoading();
    this.watch.subscribe((data:any) => {
      this.weatherService.get({lat: data.coords.latitude, long: data.coords.longitude}).subscribe((res:any) =>{
        this.city = res.name;
        console.log(res);
        this.weather = res;
        for (let i = 0; i < res.weather.length; i++) {
          const e = res.weather[i];
          this.type = e.description;
        }
        this.loading = false;
        this.spinner.dismiss();
      })
    });
  }

  async initLoading() {
    this.spinner = await this.loadingController.create();
    this.spinner.present();
  }



}

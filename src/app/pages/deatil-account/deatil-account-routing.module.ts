import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeatilAccountPage } from './deatil-account.page';

const routes: Routes = [
  {
    path: '',
    component: DeatilAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeatilAccountPageRoutingModule {}

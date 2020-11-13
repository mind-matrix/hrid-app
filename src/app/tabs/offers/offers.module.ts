import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OffersPage } from './offers.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OffersPageRoutingModule } from './offers-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: OffersPage }]),
    OffersPageRoutingModule,
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DietPage } from './diet.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DietPageRoutingModule } from './diet-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: DietPage }]),
    DietPageRoutingModule,
  ],
  declarations: [DietPage]
})
export class DietPageModule {}

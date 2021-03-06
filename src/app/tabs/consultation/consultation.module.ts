import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultationPage } from './consultation.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConsultationPageRoutingModule } from './consultation-routing.module';
import { ConsultationFormComponentModule } from './consultation-form/consultation-form.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConsultationFormComponentModule,
    ConsultationPageRoutingModule
  ],
  declarations: [ConsultationPage]
})
export class ConsultationPageModule {}

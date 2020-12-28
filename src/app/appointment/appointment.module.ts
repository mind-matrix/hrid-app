import { NgModule } from '@angular/core';
import { AppointmentPage } from './appointment.page';
import { InputModule, MessageModule, MessageDataModule } from '@chatr/angular';
import { AppointmentPageRoutingModule } from './appointment-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NbButtonModule, NbSelectModule } from '@nebular/theme';

@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      InputModule,
      MessageModule,
      MessageDataModule,
      AppointmentPageRoutingModule,
      NbButtonModule,
      NbSelectModule
  ],
  declarations: [AppointmentPage]
})
export class AppointmentPageModule{}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';

import { RegisterPageRoutingModule } from './register-routing.module';

import { SafePipeModule } from 'safe-pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegisterPageRoutingModule,
    SafePipeModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}

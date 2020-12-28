import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationFormComponent } from './consultation-form.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ConsultationFormComponent],
  exports: [ConsultationFormComponent]
})
export class ConsultationFormComponentModule {}

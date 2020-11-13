import { NgModule } from '@angular/core';
import { ChatPage } from './chat.page';
import { InputModule, MessageModule, MessageDataModule } from '@chatr/angular';
import { ChatPageRoutingModule } from './chat-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
      CommonModule,
      InputModule,
      MessageModule,
      MessageDataModule,
      ChatPageRoutingModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule{}

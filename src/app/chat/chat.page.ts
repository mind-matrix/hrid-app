import { Component } from "@angular/core";

@Component({
    selector: 'app-chat',
    templateUrl: 'chat.page.html',
    styleUrls: ['chat.page.scss']
})
export class ChatPage {
    
    type: string = 'text'

    options: any = {
        placeholder: 'Type here...',
        sendButton: true
    }

    messages: any[] = [
        {
            text: 'Hi'
        }, {
            text: 'How may I help you today?'
        }
    ]

    value: any = null

    constructor() { }
}

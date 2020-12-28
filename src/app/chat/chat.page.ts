import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-chat',
    templateUrl: 'chat.page.html',
    styleUrls: ['chat.page.scss']
})
export class ChatPage implements OnInit, OnDestroy {

    sub: Subscription
    
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

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.messages.push({
                text: params['text'],
                backgroundColor: '#42f584',
                align: 'right'
            })
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }
}

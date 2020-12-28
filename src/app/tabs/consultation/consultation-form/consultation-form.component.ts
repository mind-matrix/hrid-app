import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.scss'],
})
export class ConsultationFormComponent implements OnInit {
  @Input() name: string;
  
  slot_options = [
      {
          date: '6 December, 2020',
          times: ['18:00','18:45','20:30','21:15']
      },
      {
        date: '7 December, 2020',
        times: ['17:30','18:30','21:30']
      }
  ]

  constructor() { }

  ngOnInit() {}

}

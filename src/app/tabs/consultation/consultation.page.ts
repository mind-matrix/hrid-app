import { Component } from '@angular/core';

export interface Department {
  icon: string
  name: string
  url: string
}

@Component({
  selector: 'app-consultation',
  templateUrl: 'consultation.page.html',
  styleUrls: ['consultation.page.scss']
})
export class ConsultationPage {

  selectedDepartment: string = null

  departments: Department[] = [
    {
      icon: 'assets/images/sample-treatment-icon.png',
      name: 'Urologist',
      url: 'google.com'
    },
    {
      icon: 'assets/images/sample-treatment-icon.png',
      name: 'Gastroentrologist',
      url: 'google.com'
    },
    {
      icon: 'assets/images/sample-treatment-icon.png',
      name: 'ENT Specialist',
      url: 'google.com'
    },
    {
      icon: 'assets/images/sample-treatment-icon.png',
      name: 'Endocrinologist',
      url: 'google.com'
    }
  ]

  constructor () { }

  selectDepartment(department: string) {
    this.selectedDepartment = department
  }

}

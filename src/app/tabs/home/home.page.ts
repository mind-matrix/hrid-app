import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

interface Ad {
  title: String;
  subtitle: String;
  text: String;
};

interface Treatment {
  icon: String;
  name: String;
  url: String;
};

enum YoutubeEmbedAspectRatio {
  SIXTEEN_BY_NINE = "16-9"
};

interface YoutubeEmbed {
  url: String;
  aspectRatio: YoutubeEmbedAspectRatio
};

interface Article {
  cover?: String;
  title: String;
  subtitle?: String;
  text?: String;
  url: String;
};

interface Doctor {
  name: String;
  department?: String;
  experience?: String;
  description?: String;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public name: string = 'Sagnik';

  public chatInput: string = '';

  public adlets: Ad[] = [
    {
      title: '50%',
      subtitle: 'Consult the best AYUSH Doctors',
      text: 'off on 1st Consultation'
    },
    {
      title: '50%',
      subtitle: 'Consult the best AYUSH Doctors',
      text: 'off on 1st Consultation'
    }
  ];

  public banners: Ad[] = [
    {
      title: 'Cross Domain Healthcare Platform',
      subtitle: 'India\'s First',
      text: 'Good health is not only about medicines'
    }
  ];

  treatments: Treatment[] = [
    {
      icon: 'assets/images/sample-treatment-icon.png',
      name: 'Digestive Issues',
      url: 'google.com'
    }
  ];

  public videos: YoutubeEmbed[] = [
    {
      url: 'https://www.youtube.com/embed/bmVKaAV_7-A',
      aspectRatio: YoutubeEmbedAspectRatio.SIXTEEN_BY_NINE
    }
  ];

  public articles: Article[] = [
    {
      cover: 'assets/images/sample-article-cover.jpg',
      title: 'Can I cure my PCOS with Homeopathy?',
      text: 'Dr. John Doe',
      url: 'google.com'
    }
  ];

  public doctors: Doctor[] = [
    {
      name: 'Dr. John Doe',
      department: 'BAMS',
      experience: '14 Years of Experience',
      description: 'Specialist in management of chronic diseases'
    }
  ];
  
  constructor(private menu: MenuController, private router: Router) {}

  openMenu() {
    this.menu.enable(true, 'sidenav');
    this.menu.open('sidenav');
  }

  openChat() {
    console.log(this.chatInput)
    this.router.navigate(['/chat', { text: this.chatInput }])
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConsultationPage } from './consultation.page';

describe('ConsultationPage', () => {
  let component: ConsultationPage;
  let fixture: ComponentFixture<ConsultationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

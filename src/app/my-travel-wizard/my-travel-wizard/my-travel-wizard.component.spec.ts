import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTravelWizardComponent } from './my-travel-wizard.component';

describe('MyTravelWizardComponent', () => {
  let component: MyTravelWizardComponent;
  let fixture: ComponentFixture<MyTravelWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTravelWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTravelWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

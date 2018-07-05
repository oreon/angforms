import { MyTravelWizardModule } from './my-travel-wizard.module';

describe('MyTravelWizardModule', () => {
  let myTravelWizardModule: MyTravelWizardModule;

  beforeEach(() => {
    myTravelWizardModule = new MyTravelWizardModule();
  });

  it('should create an instance', () => {
    expect(myTravelWizardModule).toBeTruthy();
  });
});

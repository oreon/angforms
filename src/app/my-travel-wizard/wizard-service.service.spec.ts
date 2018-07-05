import { TestBed, inject } from '@angular/core/testing';

import { WizardServiceService } from './wizard-service.service';

describe('WizardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WizardServiceService]
    });
  });

  it('should be created', inject([WizardServiceService], (service: WizardServiceService) => {
    expect(service).toBeTruthy();
  }));
});

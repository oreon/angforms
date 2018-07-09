import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MyTravelWizardModule } from '@app/my-travel-wizard/my-travel-wizard.module';
import { FinalMessageComponent } from '@app/about/final-message/final-message.component';
import { WizardModule } from '@app/wiz.component';
import { MyCompsModule } from '@app/mycomps';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AboutRoutingModule,
    MyTravelWizardModule,
    WizardModule,
    MyCompsModule,
    NgbAccordionModule
  ],
  declarations: [
    AboutComponent,
    FinalMessageComponent
  ]
})
export class AboutModule {

  



 }

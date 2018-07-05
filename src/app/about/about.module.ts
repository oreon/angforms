import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MyTravelWizardModule } from '@app/my-travel-wizard/my-travel-wizard.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AboutRoutingModule,
    MyTravelWizardModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }

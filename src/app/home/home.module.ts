import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { SkillModule } from '@app/skill/skill.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule,NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NgbAccordion, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    SkillModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }

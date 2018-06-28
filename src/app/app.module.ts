import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PetModule } from '@app/pet/pet.module';
import { PetTypeModule } from '@app/petType/petType.module';
import { SkillModule } from '@app/skill/skill.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { PetService } from '@app/pet/pet.service';
import { PetTypeService } from '@app/petType/petType.service';
import { SkillService } from '@app/skill/skill.service';
import { QuoteDataModule } from '@app/quoteData/quoteData.module';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    LoginModule,

    QuoteDataModule,
    SkillModule,
    AppRoutingModule,
    NgSelectModule,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SkillModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

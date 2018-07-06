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

import { NgSelectModule } from '@ng-select/ng-select';

import { TrpComponent } from './my-travel-wizard/trp/trp.component';
import { OptComponent } from './my-travel-wizard/opt/opt.component';
import { MedComponent } from './my-travel-wizard/med/med.component';

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
    
    AppRoutingModule,
    NgSelectModule,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

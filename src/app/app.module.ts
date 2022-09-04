import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JardinListComponent } from './components/jardin-list/jardin-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from'@angular/common/http';

import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { CreateJardinComponent } from './components/create-jardin/create-jardin.component';

import { ReclamationJardinComponent } from './components/reclamation-jardin/reclamation-jardin.component';
import { UpdateJardinComponent } from './components/update-jardin/update-jardin.component';
import { CoutComponent } from './components/cout/cout.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JardinListComponent,
    CreateJardinComponent,
    ReclamationJardinComponent,
    ReclamationJardinComponent,
    UpdateJardinComponent,
    CoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule,
    NgbRatingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

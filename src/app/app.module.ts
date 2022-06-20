import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCollapseModule  } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CompetencesComponent } from './competences/competences.component';
import { FiliereComponent } from './filiere/filiere.component';
import { TechComponent } from './tech/tech.component';
import { PpeComponent } from './ppe/ppe.component';
import { StageComponent } from './stage/stage.component';
import { AlternanceComponent } from './alternance/alternance.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CompetencesComponent,
    FiliereComponent,
    TechComponent,
    PpeComponent,
    StageComponent,
    AlternanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

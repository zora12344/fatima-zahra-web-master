import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CompetencesComponent } from './competences/competences.component';
import { FiliereComponent } from './filiere/filiere.component';
import { TechComponent } from './tech/tech.component';
import { PpeComponent } from './ppe/ppe.component';
import { StageComponent } from './stage/stage.component';
import { AlternanceComponent } from './alternance/alternance.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'competence',
    component: CompetencesComponent
  },
  {
    path: 'filiere',
    component: FiliereComponent
  },
  {
    path: 'tech',
    component: TechComponent
  },
  {
    path: 'ppe',
    component: PpeComponent
  },
  {
    path: 'stage',
    component: StageComponent
  },
  {
    path: 'alternance',
    component: AlternanceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

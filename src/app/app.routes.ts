import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { BusinessComponent } from './business/business';
import { ContactComponent } from './contact/contact';

import { AerospaceComponent } from './aerospace/aerospace';
import { HealthcareComponent } from './healthcare/healthcare';
import { InsuranceComponent } from './insurance/insurance';
import { IndustryComponent } from './industry/industry';
import { BankingComponent } from './banking/banking';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'aerospace', component: AerospaceComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'industry', component: IndustryComponent },
  { path: 'banking', component: BankingComponent }
];

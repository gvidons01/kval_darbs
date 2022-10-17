import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { SearchComponent } from './search/search.component';
import { RulesComponent } from './rules/rules.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddListingComponent } from './add-listing/add-listing.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'search', component: SearchComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'new', component: AddListingComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { SearchComponent } from './search/search.component';
import { RulesComponent } from './rules/rules.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { LoginComponent } from './login/login.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { AdsComponent } from './ads/ads.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'group/:id', component: CategoriesComponent },
  { path: 'category/:id', component: SubcategoriesComponent },
  { path: 'subcat/:id', component: AdsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'new', component: AddListingComponent },
  { path: 'my-listings', component: MyListingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpw', component: ForgotPwComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

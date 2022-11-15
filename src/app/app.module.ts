import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { RulesComponent } from './rules/rules.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdsComponent } from './ads/ads.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    SearchComponent,
    FooterComponent,
    RulesComponent,
    FaqComponent,
    ContactComponent,
    LoginComponent,
    AddListingComponent,
    MyListingsComponent,
    CategoriesComponent,
    AdsComponent,
    AdDetailsComponent,
    RegisterComponent,
    UserComponent,
    SearchResultComponent,
    ForgotPwComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

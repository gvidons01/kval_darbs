import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

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
    AdDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

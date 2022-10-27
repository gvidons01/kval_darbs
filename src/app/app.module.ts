import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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
import { CarsComponent } from './cars/cars.component';
import { TrucksComponent } from './trucks/trucks.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { MopedsComponent } from './mopeds/mopeds.component';
import { BicyclesComponent } from './bicycles/bicycles.component';
import { QuadbikesComponent } from './quadbikes/quadbikes.component';
import { GokartsComponent } from './gokarts/gokarts.component';
import { BoatsComponent } from './boats/boats.component';
import { TrailersComponent } from './trailers/trailers.component';
import { SparePartsComponent } from './spare-parts/spare-parts.component';

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
    CarsComponent,
    TrucksComponent,
    MotorcyclesComponent,
    MopedsComponent,
    BicyclesComponent,
    QuadbikesComponent,
    GokartsComponent,
    BoatsComponent,
    TrailersComponent,
    SparePartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

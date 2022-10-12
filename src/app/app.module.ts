import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { RulesComponent } from './rules/rules.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PropertyComponent } from './property/property.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { KidsComponent } from './kids/kids.component';
import { HobbyComponent } from './hobby/hobby.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { GardenComponent } from './garden/garden.component';
import { ConstructionComponent } from './construction/construction.component';
import { ProductionComponent } from './production/production.component';
import { ServicesComponent } from './services/services.component';

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
    VehiclesComponent,
    PropertyComponent,
    ElectronicsComponent,
    HomeComponent,
    ClothingComponent,
    KidsComponent,
    HobbyComponent,
    AgricultureComponent,
    GardenComponent,
    ConstructionComponent,
    ProductionComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

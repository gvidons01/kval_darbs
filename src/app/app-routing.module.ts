import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { SearchComponent } from './search/search.component';
import { RulesComponent } from './rules/rules.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PropertyComponent } from './property/property.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { ClothingComponent } from './clothing/clothing.component';
import { HobbyComponent } from './hobby/hobby.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { GardenComponent } from './garden/garden.component';
import { ConstructionComponent } from './construction/construction.component';
import { ProductionComponent } from './production/production.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { AddListingComponent } from './add-listing/add-listing.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'search', component: SearchComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clothing', component: ClothingComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'hobby', component: HobbyComponent },
  { path: 'agriculture', component: AgricultureComponent },
  { path: 'garden', component: GardenComponent },
  { path: 'construction', component: ConstructionComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'services', component: ServicesComponent },
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

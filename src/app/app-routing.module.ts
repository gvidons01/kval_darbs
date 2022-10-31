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

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'search', component: SearchComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'new', component: AddListingComponent },
  { path: 'my-listings', component: MyListingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cargo-cars', component: TrucksComponent },
  { path: 'motorcycles', component: MotorcyclesComponent },
  { path: 'mopeds', component: MopedsComponent },
  { path: 'bicycles', component: BicyclesComponent },
  { path: 'quadbikes', component: QuadbikesComponent },
  { path: 'gokarts', component: GokartsComponent },
  { path: 'boats', component: BoatsComponent },
  { path: 'trailers', component: TrailersComponent },
  { path: 'spare-parts', component: SparePartsComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

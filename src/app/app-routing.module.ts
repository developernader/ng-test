import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomePageComponent } from './components/homePage/homePage.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-hero', component: CreateHeroComponent },
  { path: 'heros', component: HeroesComponent },
  { path: 'hero/:heroName', component: HeroDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

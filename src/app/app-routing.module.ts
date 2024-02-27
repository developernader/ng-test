import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomePageComponent } from './components/homePage/homePage.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroDetailsColorsComponent } from './components/hero-details/heroDetails-colors/heroDetails-colors.component';
import { HeroDetailsBasicComponent } from './components/hero-details/heroDetails-basic/heroDetails-basic.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-hero', component: CreateHeroComponent },
  { path: 'heros', component: HeroesComponent },
  {
    path: 'hero/:heroName', component: HeroDetailsComponent, children: [
      { path: 'colors', component: HeroDetailsColorsComponent },
      { path: 'basic', component: HeroDetailsBasicComponent }
    ]
  },
  { path: '**', redirectTo: 'heros' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { JokesPipe } from './jokes.pipe';
import { HeroSearchPipe } from './hero-search.pipe';
import { YoungHeroDirective } from './directives/young-hero.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroDropdownDirective } from './directives/hero-dropdown.directive';
import { HeroService } from './services/hero.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomePageComponent } from './components/homePage/homePage.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroDetailsColorsComponent } from './components/hero-details/heroDetails-colors/heroDetails-colors.component';
import { HeroDetailsBasicComponent } from './components/hero-details/heroDetails-basic/heroDetails-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsDetailsComponent,
    HeroesComponent,
    HeroItemComponent,
    HeroDetailsComponent,
    CreateHeroComponent,
    HomePageComponent,
    HeroDetailsColorsComponent,
    HeroDetailsBasicComponent,
    JokesPipe,
    HeroSearchPipe,
    YoungHeroDirective,
    HeroDropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

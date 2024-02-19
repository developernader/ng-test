import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroItemComponent } from './heroes/hero-item/hero-item.component';
import { CreateHeroComponent } from './heroes/create-hero/create-hero.component';
import { JokesPipe } from './jokes.pipe';
import { HeroSearchPipe } from './hero-search.pipe';
import { YoungHeroDirective } from './directives/young-hero.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroDropdownDirective } from './directives/hero-dropdown.directive';
import { HeroService } from './services/hero.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsDetailsComponent,
    HeroesComponent,
    HeroItemComponent,
    CreateHeroComponent,
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

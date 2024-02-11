import { Component, ElementRef, ViewChild } from '@angular/core';
import { IHeroModel } from '../models/IHeroModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  herosList: IHeroModel[] = [];
  @ViewChild('titleEl') titleEl!: ElementRef;
  searchText: string = '';

  constructor() {
    // this.herosList.push({ heroName: 'Yasser Ali Mohamed', heroAge: 10 });
  }

  onHeroAdded(heroObject: IHeroModel) {
    this.herosList.push(heroObject);
  }

  mainHero = new Observable((subs) => {

    setTimeout(() => {
      subs.next('suberman');
    }, 2000);
    
  });



}

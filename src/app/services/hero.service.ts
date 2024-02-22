import { EventEmitter, Injectable } from '@angular/core';
import { IHeroModel } from '../models/IHeroModel';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroList: IHeroModel[] = [
    {
      heroName: 'patrick',
      heroAge: 22,
      heroEmail: 'patrick@gmail.com',
      heroGender: 'male',
      heroColor: ['green','purple']
    }
  ];
  //heroListChanged = new EventEmitter<IHeroModel>();
  selectedHeros: IHeroModel[] = [];

  constructor() { }

  addHero(hero: IHeroModel) {
    this.heroList.push(hero);
    //this.heroListChanged.emit(this.heroList as any);
  }

  addSelectedHero(hero: IHeroModel) {
    this.selectedHeros.push(hero);
    //console.log('selectedHeros' , this.selectedHeros);
  }
  getHeros(): IHeroModel[] {
    return this.heroList;
  }
}

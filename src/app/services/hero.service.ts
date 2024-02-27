import { EventEmitter, Injectable } from '@angular/core';
import { IHeroModel } from '../models/IHeroModel';
import { Toast, ToastrService } from 'ngx-toastr';

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
      heroColor: ['green', 'purple']
    }
  ];

  selectedHeros: IHeroModel[] = [];
  heroListChanged = new EventEmitter<IHeroModel[]>();

  constructor(private toaster: ToastrService) { }

  addHero(hero: IHeroModel){
    if (this.heroList.find(obj => obj.heroName.trim().toLowerCase() == hero.heroName.trim().toLocaleLowerCase())) {
      this.toaster.error('Hero name already exist!');
      return false;
    }
    return null;
  }

  addSelectedHero(hero: IHeroModel) {
    this.selectedHeros.push(hero);
  }

  removeSelectedHero(hero: IHeroModel) {
    this.selectedHeros = this.selectedHeros.filter(o => o.heroName !== hero.heroName);
    this.heroList = this.heroList.filter(x => x.heroName !== hero.heroName);
    this.heroListChanged.emit(this.heroList);
  }

  getHeros(): IHeroModel[] {
    return this.heroList;
  }



}

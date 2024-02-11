import { Pipe, PipeTransform } from '@angular/core';
import { IHeroModel } from './models/IHeroModel';

@Pipe({
  name: 'heroSearch',
  pure: false,
})
export class HeroSearchPipe implements PipeTransform {
  transform(heroArr: IHeroModel[], searchText: string) {
    if (heroArr.length === 0) {
      return heroArr;
    }
    return heroArr.filter((obj) => obj.heroName.includes(searchText));
  }
}

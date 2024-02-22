import { Component, ElementRef, Input } from '@angular/core';
import { IHeroModel } from 'src/app/models/IHeroModel';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
})
export class HeroItemComponent {

  @Input() heroData!: IHeroModel;

  @Input() index!: number;
  @Input() title!: string;
  constructor(private heroSerivce: HeroService) { }
  
  acceptHero() {
this.heroSerivce.addSelectedHero(this.heroData);
  }

}

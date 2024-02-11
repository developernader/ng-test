import { Component, ElementRef, Input } from '@angular/core';
import { IHeroModel } from 'src/app/models/IHeroModel';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
})
export class HeroItemComponent {
  @Input() heroData!: IHeroModel;
  @Input() index!: number;
  @Input() title!: string;
  
}

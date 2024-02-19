import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IHeroModel } from '../models/IHeroModel';
import { Observable } from 'rxjs';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent implements OnInit {
  herosList: IHeroModel[] = [];
  @ViewChild('titleEl') titleEl!: ElementRef;
  searchText: string = '';

  constructor(private heroService: HeroService) {
    // this.herosList.push({ heroName: 'Yasser Ali Mohamed', heroAge: 10 });
  }
  ngOnInit(): void {
    this.heroService.heroListChanged.subscribe(data => {
      this.herosList = data as any;
    })
  }
  mainHero = new Observable((subs) => {

    setTimeout(() => {
      subs.next('suberman');
    }, 2000);

  });

}

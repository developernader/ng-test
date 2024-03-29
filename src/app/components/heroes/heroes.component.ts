import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IHeroModel } from '../../models/IHeroModel';
import { Observable } from 'rxjs';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent implements OnInit {
  herosList: IHeroModel[] = [];
  title ="New hero added.";
  searchText: string = '';

  constructor(private heroService: HeroService) {
    // this.herosList.push({ heroName: 'Yasser Ali Mohamed', heroAge: 10 });
  }
  
  ngOnInit(): void {
    this.heroService.heroListChanged.subscribe(data => {
      this.herosList = data as any;
    })
    this.herosList = this.heroService.getHeros();
  }
  
  mainHero = new Observable((subs) => {
    setTimeout(() => {
      subs.next('suberman');
    }, 2000);
  });

  changeTitle()
  {
    this.title = 'New hero changed!!!';
  }
}

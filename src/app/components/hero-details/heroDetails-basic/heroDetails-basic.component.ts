import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHeroModel } from 'src/app/models/IHeroModel';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroDetails-basic',
  templateUrl: './heroDetails-basic.component.html',
  styleUrls: ['./heroDetails-basic.component.css']
})
export class HeroDetailsBasicComponent implements OnInit {
  heroInfo!: IHeroModel | null;
  constructor(private acRoute: ActivatedRoute, private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.acRoute.parent?.params.subscribe(prm => {
      this.getHeroData(prm['heroName']);
    });
  }

  getHeroData(name: string) {
    //this.heroInfo = this.heroService.getHeroByName(name);
  }

  goToColors() {
    this.router.navigate(['../colors'],
      {
        relativeTo: this.acRoute,
        queryParams: { colors: this.heroInfo?.heroColor.toString() },
        fragment: 'fregColors'
      });
  }

}

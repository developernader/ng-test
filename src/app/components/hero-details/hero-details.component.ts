import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroModel } from 'src/app/models/IHeroModel';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  constructor(private acRoute: ActivatedRoute) { }

  name1 = '';
  name2 = '';

  ngOnInit(): void {
    this.name1 = this.acRoute.snapshot.params['heroName'];

    this.acRoute.params.subscribe(prm => {
      this.name2 = prm['heroName'];
    });
  }

}

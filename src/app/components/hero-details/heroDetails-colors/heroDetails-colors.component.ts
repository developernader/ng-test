import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroDetails-colors',
  templateUrl: './heroDetails-colors.component.html',
  styleUrls: ['./heroDetails-colors.component.css']
})
export class HeroDetailsColorsComponent implements OnInit {
  colors: string = '';
  constructor(private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.queryParams.subscribe(prm => {
      this.colors = prm['colors'];
    });

    // this.acRoute.snapshot.queryParams['colors'];

    this.acRoute.fragment.subscribe(obj => {
      console.log(obj)
    });

    this.acRoute.snapshot.fragment;
  }

}

import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appYoungHero]',
})
export class YoungHeroDirective implements OnInit {
  constructor(private element: ElementRef, private redndrer: Renderer2) {}
  @Input() age!: number;
  @Input() gender!: string;
  @Input() name!: string;
  ngOnInit() {
    if (this.age >= 50) {
      //this.element.nativeElement.style.color = 'blue';
      this.redndrer.setStyle(this.element.nativeElement, 'color', 'blue');
    } else {
      this.redndrer.setStyle(this.element.nativeElement, 'color', 'red');
    }

    if (this.gender == 'female') {
      this.redndrer.addClass(this.element.nativeElement, 'femaleCustom');
    } 
    
  }
}

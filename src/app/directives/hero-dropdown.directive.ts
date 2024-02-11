import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHeroDropdown]',
})
export class HeroDropdownDirective {
  
  constructor(private element: ElementRef) { }

  @HostBinding('class.show') show = false;
  @HostListener('document:click', ['$event']) toggleDropdown(event: Event) {
    const btn = document.querySelector('#dropdownMenu2');
    if (btn) {
      this.show = !this.element.nativeElement.contains(event.target)
        || btn.contains(event.target as Node) ? !this.show : false;
    }
  }
}

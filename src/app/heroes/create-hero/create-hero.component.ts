import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { IHeroModel } from 'src/app/models/IHeroModel';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css'],
})
export class CreateHeroComponent {
  @Output('heroAdded') heroAdded = new EventEmitter<IHeroModel>();
  @ViewChild('nameInputEl') nameEl!: ElementRef;
  @ViewChild('genderEl') genderEl!: ElementRef;
  age: number = 0;
  gender: string = 'male';

  // @Input() gender: string = 'male';

  onAddNewHero() {
    const hero: IHeroModel = {
      heroName: this.nameEl.nativeElement.value,
      heroAge: this.age,
      //heroGender: this.genderEl.nativeElement.value
      heroGender: this.gender
    };
    this.heroAdded.emit(hero);
    //name='';
    this.nameEl.nativeElement.value = '';
    this.age = 0;
  }

  changeGender(gender: string) { }
}

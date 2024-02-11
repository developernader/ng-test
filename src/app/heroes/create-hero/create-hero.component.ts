import {  Component,  ElementRef,  EventEmitter,  Output,  ViewChild} from '@angular/core';
import { IHeroModel } from 'src/app/models/IHeroModel';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css'],
})
export class CreateHeroComponent {
  @Output() heroAdded = new EventEmitter<IHeroModel>();
   
  onAddNewHero() {

    // const hero: IHeroModel = {
    //   heroName: this.nameEl.nativeElement.value,
    //   heroAge: this.age,
    //   heroGender: this.genderEl.nativeElement.value,
    // };
    // this.heroAdded.emit(hero);
  }

  changeGender(gender:string)
  {

  }

}

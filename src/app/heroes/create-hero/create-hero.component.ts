import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IHeroModel } from 'src/app/models/IHeroModel';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css'],
})
export class CreateHeroComponent {
  
  heroForm!: FormGroup;

  @Output('heroAdded') heroAdded = new EventEmitter<IHeroModel>();
  @ViewChild('genderEl') genderEl!: ElementRef;
  // @ViewChild('nameInputEl') nameEl!: ElementRef;
  // @Input() gender: string = 'male';

  // age: number = 0;
   //gender: string = 'male';

  formInit() {

    this.heroForm = new FormGroup({
      heroName: new FormControl(null),
      heroAge: new FormControl(null),
      heroEmail: new FormControl(null),
      heroGender: new FormControl('male')
    });

  }

  onAddNewHero() {

    //const hero: IHeroModel = {
    //heroName: this.nameEl.nativeElement.value,
    //heroAge: this.age,
    //heroGender: this.genderEl.nativeElement.value
    //heroGender: this.gender
    //};

    //this.heroAdded.emit(hero);
    //name='';
    //this.nameEl.nativeElement.value = '';
    //this.age = 0;
  }

  changeGender(gender: string) {
this.heroForm.controls['heroGender'].setValue(gender);
  }

}

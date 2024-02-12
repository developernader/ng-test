import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IHeroModel } from 'src/app/models/IHeroModel';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css'],
})
export class CreateHeroComponent {

  heroForm?: FormGroup;

  @Output('heroAdded') heroAdded = new EventEmitter<IHeroModel>();
  @ViewChild('genderEl') genderEl!: ElementRef;
 
constructor() {
  this.formInit();
}

  formInit() {
    this.heroForm = new FormGroup({
      heroName: new FormControl(null, Validators.required),
      heroAge: new FormControl(null,Validators.required),
      heroEmail: new FormControl(null,[Validators.required,Validators.email]),
      heroGender: new FormControl('male')
    });

  }

  onAddNewHero() {
    const hero: IHeroModel = {
      heroName: this.heroName.value.heroName,
      heroAge: this.heroAge.value.heroAge,
      heroEmail: this.heroEmail.value.heroEmail,
      heroGender: this.genderEl.nativeElement.value,

    };
    this.heroAdded.emit(hero);

    //name='';
    //this.nameEl.nativeElement.value = '';
    //this.age = 0;
  }

  changeGender(gender: string) {
    this.heroForm.controls['heroGender'].setValue(gender);
  }

}

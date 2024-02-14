import { Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IHeroModel } from 'src/app/models/IHeroModel';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css'],
})
export class CreateHeroComponent {
  heroForm!: FormGroup;
  @Output('heroAdded') heroAdded = new EventEmitter<IHeroModel>();

  constructor(private formBuilder: FormBuilder) {
    this.formInit();
  }

  formInit() {
    this.heroForm = new FormGroup({

      heroInfo: new FormGroup({
        heroName: new FormControl(null, Validators.required),
        heroAge: new FormControl(null, Validators.required),
        heroEmail: new FormControl(null, [Validators.required, Validators.email]),
      }),

      heroGender: new FormControl('male')
    });

  }

  onAddNewHero() {
    const hero: IHeroModel = {
      heroName: this.heroForm.value.heroInfo.heroName,
      heroAge: this.heroForm.value.heroInfo.heroAge,
      heroEmail: this.heroForm.value.heroInfo.heroEmail,

      heroGender: this.heroForm.value.heroGender,
    };
    this.heroAdded.emit(hero);
  }

  changeGender(gender: string) {
    this.heroForm.controls['heroGender'].setValue(gender);
  }

}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IHeroModel } from 'src/app/models/IHeroModel';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css'],
})
export class CreateHeroComponent implements OnInit {

  heroForm!: FormGroup;
  

  get heroNameGetter() { return this.heroForm.get('heroInfo.heroName') };
  get heroAgeGetter() { return this.heroForm.get('heroInfo.heroAge') };
  get heroEmailGetter() { return this.heroForm.get('heroInfo.heroEmail') };
  get heroColorsGeeter() { return this.heroForm.get('heroSuitColor') as FormArray };


  constructor(private formBuilder: FormBuilder, private heroService: HeroService) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {

    // this.heroForm = new FormGroup({

    //   heroInfo: new FormGroup({
    //     heroName: new FormControl(null, Validators.required),
    //     heroAge: new FormControl(null, Validators.required),
    //     heroEmail: new FormControl(null, [Validators.required, Validators.email]),
    //   }),

    //   heroGender: new FormControl('male')
    // });


    this.heroForm = this.formBuilder.group({

      heroInfo: this.formBuilder.group({
        heroName: [null, Validators.required],
        heroAge: [null, [Validators.required, this.ageValidation]],
        heroEmail: [null, [Validators.required, Validators.email]],
      }),

      heroGender: ['male'],

      heroSuitColor: this.formBuilder.array(
        [this.formBuilder.control('', Validators.required)]
      )
    });


  }

  ageValidation(control: AbstractControl) {
    if (Number(control.value) > 80) {
      return { older: true };
    }
    return null;
  }

  onAddNewHero() {
    const hero: IHeroModel = {
      heroName: this.heroForm.value.heroInfo.heroName,
      heroAge: this.heroForm.value.heroInfo.heroAge,
      heroEmail: this.heroForm.value.heroInfo.heroEmail,
      heroColor: this.heroForm.value.heroSuitColor,
      heroGender: this.heroForm.value.heroGender,
    };
    //this.heroAdded.emit(hero);
    this.heroService.addHero(hero);
    this.heroForm.reset();
    this.formInit();
  }

  changeGender(gender: string) {
    this.heroForm.controls['heroGender'].setValue(gender);
  }

  addSuitColor() {
    this.heroColorsGeeter.push(this.formBuilder.control('', Validators.required));
  }

}

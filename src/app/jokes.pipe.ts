import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jokes',
})
export class JokesPipe implements PipeTransform {
  transform(name: string, age: number,test:string): string {
    if (name === 'batman') {
      if (age >= 50) return 'ha ha ha ha jokes on you Batman';
      else return 'ha ha jokes on you Batman';
    }
    return name;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personSearch'
})
export class PersonSearchPipe implements PipeTransform {

  transform(allPersons : any , userWord : any): any {
    if(userWord === "")
    {
        return allPersons;
    }
    else{
      return allPersons.filter((person : any)=>{
        return person.name.includes(userWord)
      })
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StringLenghtPipe'
})
export class GetStringLenghtPipe implements PipeTransform {

  transform(InputText:string): unknown {
    console.log("InputText:",InputText);
    return InputText.toString().length;
   
  }

}

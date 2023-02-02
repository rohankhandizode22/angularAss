import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limito'
})
export class LimitoPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args){
      let arr=[];
      for(let i=0;i<args;i++){

        arr.push(value[i])
      }
      return arr
    }
    return value;
  }

}


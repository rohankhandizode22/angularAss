import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchname'
})
export class SearchnamePipe implements PipeTransform {

  transform(value:any,search:string) {
    if(search==''){
      return value;
    }
    let users=[];
    for(let user of value){
      if(user.name==search){
        users.push(user);
      }
    }
    return users;
  }

}

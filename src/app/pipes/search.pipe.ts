import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allContacts:any[],serchKey:string,propertyname:string): any[] {

    const result:any=[]
    if(!allContacts || serchKey=="" || propertyname==""){
      return allContacts
    }
   allContacts.forEach((item:any)=>{
    if(item[propertyname].trim().toLowerCase().includes(serchKey.trim().toLowerCase())
    ){
      result.push(item)
    }
   }) 

    return result;
  }

}

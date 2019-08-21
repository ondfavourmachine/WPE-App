import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(citydata: Array<any>, searchText: string): any {
    // return items if no searchText
    if(searchText === undefined) return citydata;
    //return updated ninjas array containing searched items
    return citydata.filter((item)=>{
      return item.Country.LocalizedName.toLowerCase().includes(searchText.toLowerCase());
      
    })
  }

}
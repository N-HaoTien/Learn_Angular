import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    if(value <= 1000000000){
      return 'Low Transfer value';
    }
    else if(value > 1000000000 && value <= 3000000000){
      return 'Good Transfer value';
    }
      return 'High transfer value';
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilter',
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText=filterText?filterText.toLocaleLowerCase():"";

    let filteredBrands = value.filter(
      (p) => p.brandName.toLocaleLowerCase().indexOf(filterText) !== -1
    );
    if (filteredBrands.length > 0) return filteredBrands;

    let filteredColors = value.filter(
      (p) => p.colorName.toLocaleLowerCase().indexOf(filterText) !== -1
    );
    if (filteredColors.length > 0) return filteredColors;

    let filteredDescriptions = value.filter(
      (p) => p.description.toLocaleLowerCase().indexOf(filterText) !== -1
    );
    if (filteredDescriptions.length > 0) return filteredDescriptions;

    let filteredModelYears = value.filter((p) =>
      p.modelYear.toString().startsWith(filterText)
    );
    if (filteredModelYears.length > 0) return filteredModelYears;

    let filteredDailyPrice = value.filter((p) =>
      p.dailyPrice.toString().startsWith(filterText)
    );
    if (filteredDailyPrice.length > 0) return filteredDailyPrice;

    return value;
  }
}

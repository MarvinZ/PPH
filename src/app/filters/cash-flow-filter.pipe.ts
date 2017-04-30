import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'cashFlowFilter'
})
export class CashFlowFilterPipe implements PipeTransform {

    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((thing: any) =>
            thing._description.toLocaleLowerCase().indexOf(filterBy) !== -1
            || thing._paymentmethod.toLocaleLowerCase().indexOf(filterBy) !== -1
            || thing._reference.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}

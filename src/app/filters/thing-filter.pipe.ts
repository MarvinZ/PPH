import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'thingFilter'
})
export class ThingFilterPipe implements PipeTransform {

    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((thing: any) =>
            thing.Description.toLocaleLowerCase().indexOf(filterBy) !== -1 ) : value;
    }
}
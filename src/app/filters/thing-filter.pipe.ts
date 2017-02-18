import {  PipeTransform, Pipe } from '@angular/core';
import { IThing } from './../models/thing';

@Pipe({
    name: 'thingFilter'
})
export class ThingFilterPipe implements PipeTransform {

    transform(value: IThing[], filterBy: string): IThing[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((thing: IThing) =>
            thing.thingName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}

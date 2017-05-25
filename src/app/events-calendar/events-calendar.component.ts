
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@Component({
  selector: 'app-events-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.css']
})
export class EventsCalendarComponent implements OnInit {


  ngOnInit() {
  }
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string,
    event: CalendarEvent
  };

  actions: CalendarEventAction[] = [
  //   {
  //   label: '<i class="fa fa-fw fa-pencil"></i>',
  //   onClick: ({ event }: { event: CalendarEvent }): void => {
  //     //    this.handleEvent('Edited', event);
  //   }
  // }, {
  //   label: '<i class="fa fa-fw fa-times"></i>',
  //   onClick: ({ event }: { event: CalendarEvent }): void => {
  //     this.events = this.events.filter(iEvent => iEvent !== event);
  //     //   this.handleEvent('Deleted', event);
  //   }
  // }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [


    { "start": new Date('5/27/2017'), "end": new Date('5/27/2017'), "title": " (BOXING) Brook-Spence Jr. fight", "color": colors.blue, "actions": this.actions },
    { "start": new Date('5/28/2017'), "title": " (MOTORRACING) Indy 500", "color": colors.blue, "actions": this.actions },
    { "start": new Date('5/29/2017'), "end": new Date('6/5/2017'), "title": " (TENNIS) French Open", "color": colors.blue, "actions": this.actions },
    { "start": new Date('6/1/2017'), "title": " (BASKETBALL) NBA Finals Begin", "color": colors.blue, "actions": this.actions },
    { "start": new Date('6/3/2017'), "title": " (SOCCER) UEFA Champions League Final, (MMA) UFC 212", "color": colors.blue, "actions": this.actions },
    { "start": new Date('6/10/2017'), "title": " (HORSES) Belmont Stakes", "color": colors.blue, "actions": this.actions },
    { "start": new Date('6/17/2017'), "title": " (BOXING) Ward-Kovalev fight", "color": colors.blue, "actions": this.actions },
    { "start": new Date('6/15/2017'), "end": new Date('6/18/2017'), "title": " (GOLF) U.S. Open", "color": colors.blue, "actions": this.actions },
    { "start": new Date('7/1/2017'), "title": " (BOXING) Pacquiao-Horn fight", "color": colors.blue, "actions": this.actions },
    { "start": new Date('7/3/2017'), "end": new Date('7/16/2017'), "title": " (TENNIS) Wimbledon", "color": colors.blue, "actions": this.actions },
    { "start": new Date('7/8/2017'), "title": " (MMA) UFC 213", "color": colors.blue, "actions": this.actions },
    { "start": new Date('7/11/2017'), "title": " (BASEBALL) MLB All Star Game", "color": colors.blue, "actions": this.actions },
    { "start": new Date('7/20/2017'), "end": new Date('7/23/2017'), "title": " (GOLF) The Open Championship", "color": colors.blue, "actions": this.actions },
    { "start": new Date('7/29/2017'), "title": " (MMA) UFC 214", "color": colors.blue, "actions": this.actions },
    { "start": new Date('8/10/2017'), "title": " (FOOTBALL) NFL Pre-Season Start", "color": colors.blue, "actions": this.actions },
    { "start": new Date('8/10/2017'), "end": new Date('8/13/2017'), "title": " (GOLF) PGA Championship", "color": colors.blue, "actions": this.actions },
    { "start": new Date('8/29/2017'), "end": new Date('9/11/2017'), "title": " (TENNIS) US Open", "color": colors.blue, "actions": this.actions },
    { "start": new Date('9/7/2017'), "title": " (FOOTBALL) NFL Regular Season Start", "color": colors.blue, "actions": this.actions },
    { "start": new Date('9/9/2017'), "title": " (MMA) UFC 216", "color": colors.blue, "actions": this.actions },
    { "start": new Date('9/16/2017'), "title": " (BOXING) GGG-Canelo fight", "color": colors.blue, "actions": this.actions },
    { "start": new Date('10/24/2017'), "title": " (BASEBALL) MLB World Series", "color": colors.blue, "actions": this.actions },
    { "start": new Date('11/3/2017'), "end": new Date('11/4/2017'), "title": " (HORSES) Breeders' Cup", "color": colors.blue, "actions": this.actions },
    { "start": new Date('2/4/2018'), "title": " (FOOTBALL) NFL Superbowl LII", "color": colors.blue, "actions": this.actions },
    { "start": new Date('3/13/2018'), "title": " (BASKETBALL) NCAA March Madness", "color": colors.blue, "actions": this.actions },












    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions
    // }, {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue
    // }, {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: new Date(),
    //   title: 'A draggable and resizable event',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // }

  ];

  activeDayIsOpen: boolean = true;

  // constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  // eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
  //   event.start = newStart;
  //   event.end = newEnd;
  //   this.handleEvent('Dropped or resized', event);
  //   this.refresh.next();
  // }

  // handleEvent(action: string, event: CalendarEvent): void {
  //   this.modalData = {event, action};
  //   this.modal.open(this.modalContent, {size: 'lg'});
  // }

  // addEvent(): void {
  //   this.events.push({
  //     title: 'New event',
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: colors.red,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     }
  //   });
  //   this.refresh.next();
  // }

}

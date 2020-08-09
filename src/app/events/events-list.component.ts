import { Component} from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
 //templateUrl: './events-list.component.html'
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div  *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event] ="event"></event-thumbnail>
        </div>
      </div>
    </div>
    `
})


export class EventsListComponent{
  events: any[]
  constructor(private eventService: EventService){
   // this.events = this.eventService.getEvents()
  }
  ngOnInit(){
    this.events = this.eventService.getEvents()
  }

}

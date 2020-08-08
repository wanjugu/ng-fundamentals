import { Component} from '@angular/core';

@Component({
  selector: 'events-list',
 //templateUrl: './events-list.component.html'
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <event-thumbnail
        (eventClick)="handleEventClicked($event)"
       [event]="event1">
      </event-thumbnail>
    </div>
    `
})


export class EventsListComponent{
  event1 = {
    id: 1,
    name: 'Angular Connect 2020',
    date: '2019-08-20',
    time: '10:00 am',
    price: 650.00,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'Nyeri',
      country: 'KKenya'
    }
  }

  handleEventClicked(event){
    console.log(event);
  }
}

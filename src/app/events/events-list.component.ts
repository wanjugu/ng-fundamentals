import { Component} from '@angular/core';

@Component({
  selector: 'events-list',
  template:`
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}} /div>
        <div>Time: {{event.time}} </div>
        <div>Price:  \$ {{event.price}}</div>
      </div>
      <span>Location: {{event.location.address}}</span>
      <span>&nbsp;</span>
      <span>Address:{{event.location.address}}</span>
    </div>
  `
})


export class EventsListComponent{
  event = {
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
}

import { Component} from '@angular/core';

@Component({
  selector: 'events-list',
 // template:` `
 templateUrl: './events-list.component.html'
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

import { Component,Input, Output,EventEmitter } from '@angular/core'
@Component({
  selector: 'event-thumbnail',
  template:`
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}} </div>
      <div>Time: {{event?.time}} </div>
      <div>Price:  \${{event?.price}}</div>
      <div>
      <span>Location: {{event?.location.address}}</span>
      <span class="pad-left">Address:{{event?.location.city}},{{event?.location.country}}</span>
      </div>
      <div *ngIf="event?.onlineurl">OnlineUrl:
        {{event?.onlineurl}}</div>
    </div>
  `,

  styles: [`
    .thumbnail { min-height:210px;}
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb;}
    `]
})


export class EventThumbnailComponent{
  //expect input from component of any type
  @Input() event:any

}

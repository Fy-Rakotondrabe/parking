import { Component } from '@angular/core';
import { Ticket } from './ticket'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parking';
  tickets: Ticket[] = [];
}

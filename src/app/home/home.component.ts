import { TicketService } from '../ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  voitures: number
  places: number
  rendement: number

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.voitures = this.ticketService.getTicket().length
    this.places = 30 - this.voitures
    this.rendement = this.ticketService.getRendement()
  }

}

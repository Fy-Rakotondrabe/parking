import { TicketService } from '../ticket.service';
import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  error: string;
  tickets: Ticket[]
  montant: number

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.tickets = this.ticketService.getTicket()
  }

  add(numero: string) {
    this.ticketService.addTicket(numero, (error) => {
      if (error != "") this.error = error
      this.tickets = this.ticketService.getTicket();
    })
  }

  delete(id: string) {
    this.montant = this.ticketService.deleteTicket(id)
    this.ticketService.getTicket()
  }
}

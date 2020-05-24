import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  historiques: Ticket[]

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.historiques = this.ticketService.getHistorique()
  }

}

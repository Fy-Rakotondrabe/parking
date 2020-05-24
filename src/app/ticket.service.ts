import { Ticket } from './ticket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Ticket[] = [];
  historiques: Ticket[] = [];
  rendement: number = 0;

  constructor() { }

  genId(numero: string): string {
    const id = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}-${new Date().getTime()}-${numero.split(' ').join("").toUpperCase()}`
    return id
  }

  getDate(): string {
    return `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}:${new Date().getHours()}-${new Date().getTime()}`
  }

  getTicket(): Ticket[] {
    return this.tickets
  }

  getMontant(entrer, sortie): number {
    const total = (parseInt(sortie) - parseInt(entrer)) 
    
    if (total < 3600000) {
      return 1000
    } else {
      let montant = total
      montant /= 3600000
      return Math.round(montant) * 1000
    }

  }

  addTicket(numero, error): void {
    if (this.tickets.length < 30) {
      if (numero && numero.length <= 8 && !isNaN(numero.substring(0, 4)) && typeof(numero.substring(5, 8)) == 'string') {
        const ticket = {
          id: this.genId(numero),
          numero: numero.toUpperCase(),
          dateE: this.getDate(),
          dateS: null
        }
        this.historiques.push(ticket as Ticket)
        this.tickets.push(ticket as Ticket)
      } else {
        error("invalid matricule");
      }
    } else {
      error("Parking is full !")
    }
  }

  deleteTicket(id: string): number {
    const index = this.tickets.findIndex(ticket => ticket.id === id);
    this.historiques[index].dateS = this.getDate();

    //generate montant
    const montant = this.getMontant(this.historiques[index].dateE.split('-')[3], this.historiques[index].dateS.split('-')[3])
    this.rendement = this.rendement + montant
    //delete ticket
    this.tickets.splice(index, 1);
    return montant
  }

  getHistorique(): Ticket[] {
    return this.historiques;
  }

  getRendement(): number {
    return this.rendement;
  }
}

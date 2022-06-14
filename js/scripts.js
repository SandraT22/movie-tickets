//business logic for ticket order//


function TicketOrder() {
  this.tickets = {};
  this.currentId = 0;
}

TicketOrder.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
}

TicketOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//business logic for ticket ///


function Ticket(movieTitle,time,age) {
  this.movieTitle = movieTitle;
  this.time = time;
  this.age = age;
}


function MoviePrice(movieTitle,time,age) {
 const discountPrice = "$10";
 const regularPrice = "$15";
 if (movieTitle === "Holes" || time === "AM"  || age <= 12 || age >= 65) {
   return discountPrice;
 } else {
   return regularPrice;
 }
}




//function ^ to set age parameters effecting movieprice//




let ticketOrder = new TicketOrder ();
let ticketOne = new Ticket("matrix", "3:30", "12");



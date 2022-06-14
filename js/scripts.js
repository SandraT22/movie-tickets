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

//Business Logic// ticket price

function moviePrice(movieTitle,time,age) {
 const discountPrice = "$10";
 const regularPrice = "$15";
 if (movieTitle === "Holes" || time.includes("am")  || age <= 12 || age >= 65) {
   return discountPrice;
 } else {
   return regularPrice;
 }
}

//UI logic//
$(document).ready(function() {
  $("#options").submit(function(event) {
    const title = $("input:radio[name=title]:checked").val();
    const timeOfDay = $("input:radio[name=timeOfDay]:checked").val();
    const ageOfCustomer = $("input:text").val();
    // let newTicket = new Ticket(title, timeOfDay, ageOfCustomer)
    let newMoviePrice = moviePrice(title, timeOfDay, ageOfCustomer)

    $("#moviePrice").append("<p>" + "Ticket Price:" + newMoviePrice + "</p>");
    // if 
    event.preventDefault()
    });
})




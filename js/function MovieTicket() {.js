function MovieTicket() {
  this.ages = {};
  this.times= {};
  this.titles= {};
}

function discountTicket (inputAge) {
  
  if (inputAge < 12 || inputAge > 65) {
    return true;
  } else {
    return false;
  }
  
}




// let age1= new Age()

// let normalTicket = ['Speed','PM']


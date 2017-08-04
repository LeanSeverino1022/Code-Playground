
function Dice(sides){
  this.sides = sides  
}

Dice.prototype.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }  

  var dice1 = new Dice(6);
   var dice10 = new Dice(16);

   console.log(dice1.roll === dice10.roll);

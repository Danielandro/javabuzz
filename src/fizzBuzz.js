var Javabuzz = function() {};

Javabuzz.prototype.isDivisibleByThree = function(number) {  
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  // return (number % 5 === 0);
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function (number) {  
  return this._isDivisibleBy(number, 15);
};
// this is a private method (has an underscore)
Javabuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "Javabuzz";
  }else if (this.isDivisibleByThree(number)) {
    return "Java";
  }else if(this.isDivisibleByFive(number)) {
    return "Buzz";
  }else{
    return number;
  };
};

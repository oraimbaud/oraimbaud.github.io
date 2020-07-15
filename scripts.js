function Clock() {
  this.secHand = document.getElementById('secHand');
  this.minHand = document.getElementById('minHand');
  this.hourHand = document.getElementById('hourHand');

  var date = new Date();
  this.time = {
    ms: date.getMilliseconds(),
    s: date.getSeconds(),
    m: date.getMinutes(),
    h: date.getHours(),
  }
}

Clock.prototype.init = function () {
  this.secHand.style = `transform: rotate(${this.time.s * 6}deg)`;
  this.minHand.style = `transform: rotate(${this.time.m * 6}deg)`;
  this.hourHand.style = `transform: rotate(${this.time.h * 30}deg)`;
}

var clock = new Clock();

clock.init();

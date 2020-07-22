export default class Clock {
  constructor() {
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

  init() {
    this.secHand.style = `transform: rotate(${this.time.s * 6}deg)`;
    this.minHand.style = `transform: rotate(${this.time.m * 6}deg)`;
    this.hourHand.style = `transform: rotate(${this.time.h * 30}deg)`;
  }
}

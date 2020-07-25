import view from './view.html';
import style from './style.css';

export default class Clock {
  constructor() {
    this.render();
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

  render() {
    document.getElementById('clock').innerHTML = view;
  }

  init() {
    this.secHand.style = `transform: rotate(${this.time.s * 6}deg)`;
    this.minHand.style = `transform: rotate(${this.time.m * 6}deg)`;
    this.hourHand.style = `transform: rotate(${this.time.h * 30}deg)`;
  }
}

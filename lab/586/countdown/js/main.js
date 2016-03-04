$(document).ready(function() {

  var d;
  var a_d;
  var a_h;
  var a_m;
  var a_s;

  var d_d = 24;
  var d_h = 20 + d_d * 24;
  var d_m = 20 + d_h * 60;
  var d_s = 0 + d_m * 60;

  function timer() {
    d = new Date();
    a_d = d.getDate();
    a_h = d.getHours() + a_d * 24;
    a_m = d.getMinutes() + a_h * 60;
    a_s = d.getSeconds() + a_m * 60;

    $('.days').text(d_d - a_d);
    $('.hours').text(d_h - a_h);
    $('.minutes').text(d_m - a_m);
    $('.seconds').text(d_s - a_s);

    $('.trails').css('width', a_s / d_s * 100 + '%');
    $('.oliv').css('left', a_s / d_s * 100 + '%');
  }
  timer();
  window.setInterval(timer, 1000);

});
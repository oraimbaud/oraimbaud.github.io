$(document).ready(function() {

  var d;
  var a_d;
  var a_h;
  var a_m;
  var a_s;

  var d_d = 24;
  var d_h = 21 + d_d * 24;
  var d_m = 40 + d_h * 60;
  var d_s = 0 + d_m * 60;

  function timer() {
    d = new Date();
    a_d = d.getDate();
    a_h = d.getHours() + a_d * 24;
    a_m = d.getMinutes() + a_h * 60;
    a_s = d.getSeconds() + a_m * 60;

    if (a_s / d_s < 1) {

      if (d_d - a_d > 0) { $('.days').text(d_d - a_d - 1); } else { $('.days').text(0); }
      if (d_h - a_h > 0) { $('.hours').text(d_h - a_h - 1); } else { $('.hours').text(0); }
      if (d_m - a_m > 0) { $('.minutes').text(d_m - a_m - 1); } else { $('.minutes').text(0); }
      $('.seconds').text(d_s - a_s);

      $('.trails').css('width', a_s / d_s * 100 + '%');
      $('.oliv').css('left', a_s / d_s * 100 + '%');

      if (a_s / d_s >= .3 && a_s / d_s < .35) {
        $('.oliv').attr('src', 'img/oliv@30.gif');
        $('.kathi').attr('src', 'img/kathi@30.gif');
      } else if (a_s / d_s >= .35 && a_s / d_s < .45) {
        $('.oliv').attr('src', 'img/oliv@35.gif');
        $('.kathi').attr('src', 'img/kathi@30.gif');
      } else if (a_s / d_s >= .45 && a_s / d_s < .5) {
        $('.oliv').attr('src', 'img/oliv@45.gif');
        $('.kathi').attr('src', 'img/kathi@30.gif');
      } else if (a_s / d_s >= .5 && a_s / d_s < .55) {
        $('.oliv').attr('src', 'img/oliv@50.gif');
        $('.kathi').attr('src', 'img/kathi@30.gif');
      } else if (a_s / d_s >= .55 && a_s / d_s < .6) {
        $('.oliv').attr('src', 'img/oliv@55.gif');
        $('.kathi').attr('src', 'img/kathi@55.gif');
      } else if (a_s / d_s >= .6 && a_s / d_s < .65) {
        $('.oliv').attr('src', 'img/oliv@60.gif');
        $('.kathi').attr('src', 'img/kathi@60.gif');
      } else if (a_s / d_s >= .65 && a_s / d_s < .7) {
        $('.oliv').attr('src', 'img/oliv@65.gif');
        $('.kathi').attr('src', 'img/kathi@60.gif');
      } else if (a_s / d_s >= .7 && a_s / d_s < .75) {
        $('.oliv').attr('src', 'img/oliv@70.gif');
        $('.kathi').attr('src', 'img/kathi@60.gif');
      } else if (a_s / d_s >= .75 && a_s / d_s < .8) {
        $('.oliv').attr('src', 'img/oliv@70.gif');
        $('.kathi').attr('src', 'img/kathi@80.gif');
      } else if (a_s / d_s >= .8 && a_s / d_s < .9) {
        $('.oliv').attr('src', 'img/oliv@80.gif');
        $('.kathi').attr('src', 'img/kathi@85.gif');
      } else if (a_s / d_s >= .9 && a_s / d_s < .95) {
        $('.oliv').attr('src', 'img/oliv@90.gif');
        $('.kathi').attr('src', 'img/kathi@85.gif');
      } else if (a_s / d_s >= .95 && a_s / d_s < 1) {
        $('.oliv').attr('src', 'img/oliv@95.gif');
        $('.kathi').attr('src', 'img/kathi@95.gif');
      } else if (a_s / d_s == 1) {
        $('.oliv').attr('src', 'img/oliv@100.gif');
        $('.kathi').hide();
      }
    } else {

      clearInterval(interval);

      $('.days').text(0);
      $('.hours').text(0);
      $('.minutes').text(0);
      $('.seconds').text(0);

      $('.trails').css('width', '100%');
      $('.oliv').css('left', '100%')

      $('.diagram').addClass('at_100');

      $('.oliv').attr('src', 'img/oliv@100.gif');
      $('.kathi').hide();

      var snow = {

        wind : 0,
        maxXrange : 100,
        minXrange : 10,
        maxSpeed : 2,
        minSpeed : 1,
        color : "#fff",
        char : "*",
        maxSize : 20,
        minSize : 8,

        flakes : [],
        WIDTH : 0,
        HEIGHT : 0,

        init : function(nb){
          var o = this,
            frag = document.createDocumentFragment();
          o.getSize();

          

          for(var i = 0; i < nb; i++){
            var flake = {
              x : o.random(o.WIDTH),
              y : - o.maxSize,
              xrange : o.minXrange + o.random(o.maxXrange - o.minXrange),
              yspeed : o.minSpeed + o.random(o.maxSpeed - o.minSpeed, 100),
              life : 0,
              size : o.minSize + o.random(o.maxSize - o.minSize),
              html : document.createElement("span")
            };

            flake.html.style.position = "absolute";
            flake.html.style.top = flake.y + "px";
            flake.html.style.left = flake.x + "px";
            flake.html.style.fontSize = flake.size + "px";
            flake.html.style.color = o.color;
            flake.html.appendChild(document.createTextNode(o.char));

            frag.appendChild(flake.html);
            o.flakes.push(flake);
          }

          document.body.appendChild(frag);
          o.animate();
        },

        animate : function(){
          var o = this;
          for(var i = 0, c = o.flakes.length; i < c; i++){
            var flake = o.flakes[i],
              top = flake.y + flake.yspeed,
              left = flake.x + Math.sin(flake.life) * flake.xrange + o.wind;
            if(top < o.HEIGHT - flake.size - 10 && left < o.WIDTH - flake.size && left > 0){
              flake.html.style.top = top + "px";
              flake.html.style.left = left + "px";
              flake.y = top;
              flake.x += o.wind;
              flake.life+= .01;
            }
            else {
              flake.html.style.top = -o.maxSize + "px";
              flake.x = o.random(o.WIDTH);
              flake.y = -o.maxSize;
              flake.html.style.left = flake.x + "px";
              flake.life = 0;
            }
          }
          setTimeout(function(){
            o.animate();
          },20);
        },

        random : function(range, num){
          var num = num?num:1;
          return Math.floor(Math.random() * (range + 1) * num) / num;
        },

        getSize : function(){
          this.WIDTH = document.body.clientWidth || window.innerWidth;
          this.HEIGHT = document.body.clientHeight || window.innerHeight;
        }

      };

      snow.init(30);

    }
  }
  timer();
  var interval = window.setInterval(timer, 1000);

});
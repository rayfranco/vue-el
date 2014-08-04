var Vue = require('vue');
var VueEl = require('../');

Vue.use(VueEl);

new Vue({
  el: '#app',
  data: {
    copy: false
  },
  methods: {
    copyToCanvas: function(){
      this.copy = true; // display canvas

      Vue.nextTick(function(){
        var logo, canvas, ctx, center, update;
        var deg = Math.PI/180,
            i = 0;


        // Get the logo node from this vm
        logo = this.$$.logo;

        // Get the canvas node from the canvasContainer vm
        canvas = this.$.canvasContainer.$$.canvas;

        canvas.width = logo.offsetWidth;
        canvas.height = logo.offsetHeight;

        center = {
          x: canvas.width/2,
          y: canvas.height/2
        };

        ctx = canvas.getContext('2d');

        i = 0;
        update = function() {
          i += deg;
          ctx.save();
          ctx.clearRect(0,0,canvas.width, canvas.height);
          ctx.translate(center.x, center.y);
          ctx.rotate(i);
          ctx.translate(-center.x, -center.y);
          ctx.drawImage(logo,0,0);
          ctx.restore();

          Vue.nextTick(update);
        }

        update();
      }.bind(this));
    }
  },
  ready: function() {

  }
});
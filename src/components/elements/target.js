const AFRAME = window.AFRAME;

AFRAME.registerComponent('target', {
    init: function () {
      var el = this.el;
      var t =0;

      function animate() {
        //TODO make it faster
        t+=0.01;
        var animation = requestAnimationFrame(animate);
        el.setAttribute('position', {x:-(Math.sin(t*2))*6,y:'1.5',z:'-8'});
          el.sceneEl.addEventListener('ballThrown', function(ev, target){
            cancelAnimationFrame(animation);
          });
        }
        el.sceneEl.addEventListener('ballReset', function(ev, target){
          console.log("reset");
          animate()
        });
        animate()  

      }
  });
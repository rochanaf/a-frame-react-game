import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('target', {
    init: function () {
      var el = this.el;
      var t =0;

      function animate() {
        //TODO make it faster (0.05)
        t+=constants.TRANSLATION;
        var animation = requestAnimationFrame(animate);
        el.setAttribute('position', {x:-(Math.sin(t*2))*6,y:constants.INITIALTARGETPOSITIONY,z:constants.INITIALTARGETPOSITIONZ});
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
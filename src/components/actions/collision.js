const AFRAME = window.AFRAME;

AFRAME.registerComponent('collided', {


  init: function() {
      var el = this.el;
      var target = document.getElementById("target");
      el.addEventListener('mouseup', function(ev, target){
          console.log("mouseup");
          updatePosition(el);
              // TODO disable mouseclick after ball is thrown and enable after reset
          resetBall(el);
          // TODO check if collision happened
          // TODO update score
      });
}});

function updatePosition(el) {
  el.object3D.position.z = -8;
}

function resetBall(el) {
  var initialPosition= {x: 0, y: 1.5, z: -0.5};
  const resetBall = () => {
    el.object3D.position.set(0,1.5,-0.5);
}
setTimeout(resetBall,1000);
}
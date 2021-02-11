const AFRAME = window.AFRAME;
const TIMEOUT = 1000;
const PLANPOSITIONZ = -8;
const INITIALPOSITIONX= 0;
const INITIALPOSITIONY= 1.5;
const INITIALPOSITIONZ= -0.5;

AFRAME.registerComponent('shootBall', {


  init: function() {
      var el = this.el;
      el.addEventListener('mousedown', function(ev, target){
        console.log("mousedown");
      });
      el.addEventListener('mouseup', function(ev, target){
          el.emit('ballThrown');
          console.log("mouseup");
          updatePosition(el);
              // TODO disable mouseclick after ball is thrown and enable after reset
          resetBall(el);
          emitEvent(el);
          // TODO check if collision happened
          // TODO update score
      });
}});

function updatePosition(el) {
  el.object3D.position.z = PLANPOSITIONZ;
}

function resetBall(el) {
  const resetBall = () => {
    el.object3D.position.set(INITIALPOSITIONX,INITIALPOSITIONY,INITIALPOSITIONZ);
  }
  setTimeout(resetBall,TIMEOUT);
}

function emitEvent(el) {
  const emitEvent = () => {
    el.emit('ballReset');
  }
  setTimeout(emitEvent,TIMEOUT);
}
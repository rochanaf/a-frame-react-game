import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('throw-ball', {


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
  el.object3D.position.z = constants.INITIALTARGETPOSITIONZ;
}

function resetBall(el) {
  const resetBall = () => {
    el.object3D.position.set(constants.INITIALBALLPOSITIONX,
                            constants.INITIALBALLPOSITIONY,
                            constants.INITIALBALLPOSITIONZ
                            );
  }
  setTimeout(resetBall,constants.TIMEOUT);
}

function emitEvent(el) {
  const emitEvent = () => {
    el.emit('ballReset');
  }
  setTimeout(emitEvent,constants.TIMEOUT);
}
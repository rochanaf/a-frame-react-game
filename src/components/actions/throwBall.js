import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('throw-ball', {


  init: function() {
      var el = this.el;

      el.addEventListener('mousedown', function(ev, target){
        console.log("mousedown");
      });
      el.addEventListener('dragend', function(ev, target){
        // TODO: find alternative to stop firing event multiple times
        var isChosenEvent = (ev.detail.clientX!==undefined && ev.detail.clientY!==undefined) ;
        if (isChosenEvent) {
          el.emit('ballThrown');
          updatePosition(el);
              // TODO disable mouseclick after ball is thrown and enable after reset
          resetBall(el);
          emitEvent(el);
        }
      });
      el.sceneEl.addEventListener('timeout', function(ev, target){
        // TODO disable mouseclick and mouseup so ball is back to initial pos 
        resetBall(el);
        el.emit('timeoutReset');
        //TODO problem if too many timeouts
      });
}});

function updatePosition(el) {
  el.object3D.position.x*=constants.BALLMULTIPLIER;
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
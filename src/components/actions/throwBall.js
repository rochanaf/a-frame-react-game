import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('throw-ball', {


  init: function() {
      var el = this.el;
      var count =0;

      el.addEventListener('dragend', function(ev, target){
        ev.preventDefault();
        var isChosenEvent = (ev.detail.clientX!==undefined && ev.detail.clientY!==undefined) ;
        if (isChosenEvent) {
          count++;
          if(count!==2){
            el.emit('ballThrown');
            console.log('ball was thrown');
            updatePosition(el);
            resetBall(el);
            emitEvent(el);
          } 
          else count =0;
        } 
        
      });
      
      //TODO reset ball and disable mouseclick if timeout
      el.sceneEl.addEventListener('timeout', function(ev, target){
        // TODO disable mouseclick and mouseup so ball is back to initial pos 
        console.log("timeout heard throwball");
        resetBallTimeout(el);
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
    console.log('ball reset');
  }
  setTimeout(emitEvent,constants.TIMEOUT);
}

function resetBallTimeout(el) {
  el.object3D.position.set(constants.INITIALBALLPOSITIONX,
                            constants.INITIALBALLPOSITIONY,
                            constants.INITIALBALLPOSITIONZ
                            );
  
}
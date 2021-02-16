import * as constants from '../../constants.js';


//TODO refactor coutdown
constants.AFRAME.registerComponent('countdown', {
    init: function () {
      var el = this.el;
      var button = document.getElementById("countdown");  
      var animationID;
      var timeLeft = 6;
      
    button.setAttribute('text','value',""+timeLeft);
    function animate() {
      const setTime = () => {
        timeLeft--;
      button.setAttribute('text','value',""+timeLeft);
      if(timeLeft>0) animationID = requestAnimationFrame(animate);
      else {
        timeLeft=6;
        el.emit('timeout');}
    }
      setTimeout(setTime,constants.TIMEOUT);
      
    }
    // if(!stopTimer) {
    //   animation =requestAnimationFrame(animate);
    //   return animation;
    // }
      button.setAttribute('visible','false'); 
      button.setAttribute('text', {align:'center', width:'10px', color:'black'});
      el.sceneEl.addEventListener('gameStarted', function(ev, target){
        animationID = requestAnimationFrame(animate);
        console.log("First id "+animationID);
      });
  
      el.sceneEl.addEventListener('ballThrown', function(ev, target){
        console.log(animationID);
        timeLeft=1;
        cancelAnimationFrame("CANCEL: "+ animationID);
      });
      el.sceneEl.addEventListener('timeout', function(ev, target){
        console.log("timeout");
        animationID= requestAnimationFrame(animate);
        console.log("TIMEOUT ID "+animationID);
      });
       }
  });

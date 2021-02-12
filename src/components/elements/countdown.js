import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('countdown', {
    init: function () {
      var el = this.el;
      var button = document.getElementById("countdown");  
      var animation;
      
      button.setAttribute('visible','false'); 
      button.setAttribute('text', {align:'center', width:'10px', color:'black'});
      el.sceneEl.addEventListener('gameStarted', function(ev, target){
        animation = timer(button,el);
      });
      el.sceneEl.addEventListener('ballThrown', function(ev, target){
        cancelAnimationFrame(animation);
      });
      el.sceneEl.addEventListener('ballReset', function(ev, target){
        animation = timer(button,el);
      });
      }
  });


function timer(button,el) {
    const endTime = new Date().getSeconds()+constants.TIME;
    var animation;
    function getRemainingTime(deadline) {
      const currentTime = new Date().getSeconds();
      return deadline - currentTime;
    }
    function animate() {
      const remainingTime = getRemainingTime(endTime);
      (remainingTime / 1000) % 60;
      button.setAttribute('text','value',""+remainingTime)
        
        animation = requestAnimationFrame(animate);
        if(remainingTime===0) {
            cancelAnimationFrame(animation);
            el.emit('timeout')
        }
    }
    requestAnimationFrame(animate);
    return animation;
  }
 

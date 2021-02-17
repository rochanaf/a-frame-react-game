import * as constants from '../../constants.js';
import Timer from 'timer.js';

//TODO refactor coutdown
constants.AFRAME.registerComponent('countdown', {
    init: function () {
      var el = this.el;
      var button = document.getElementById("countdown");  
      var timer = new Timer();

      timer.on('tick', function(ms){
        button.setAttribute('text','value',""+(Math.ceil(ms/1000)))
      })
      timer.on('end', function(){
        button.setAttribute('text','value',""+0)
        el.emit('timeout');
      } )

      button.setAttribute('visible','false'); 
      button.setAttribute('text', {align:'center', width:'10px', color:'black'});
      el.sceneEl.addEventListener('gameStarted', function(ev, target){
        timer.start(constants.TIME);
      });
  
      el.sceneEl.addEventListener('ballThrown', function(ev, target){
        timer.pause();
      });
      el.sceneEl.addEventListener('ballReset', function(ev, target){
        timer.stop();
        timer.start(constants.TIME);
      });
      el.sceneEl.addEventListener('timeout', function(ev, target){
        timer.start(constants.TIME);
      });
      el.sceneEl.addEventListener('gameover', function(ev, target){
        timer.stop();
      });
       }
  });
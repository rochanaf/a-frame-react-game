import * as constants from '../../constants.js';
const Timer = require('tiny-timer');

//TODO refactor coutdown
constants.AFRAME.registerComponent('countdown', {
    init: function () {
      var el = this.el;
      var button = document.getElementById("countdown");  
      var animationID;
      var timeLeft = constants.TIME;
      var timer = new Timer();

      timer.on('tick', (ms) => 
      button.setAttribute('text','value',""+ Math.ceil(ms/1000)));
      timer.on('done', () => el.emit('timeout'))

      button.setAttribute('visible','false'); 
      button.setAttribute('text', {align:'center', width:'10px', color:'black'});
      el.sceneEl.addEventListener('gameStarted', function(ev, target){
        button.setAttribute('text','value',""+timeLeft);
        timer.start(constants.TIMER);
      });
  
      el.sceneEl.addEventListener('ballThrown', function(ev, target){
        timer.pause();
      });
      el.sceneEl.addEventListener('ballReset', function(ev, target){
        timer.stop();
        timer.start(constants.TIMER);
      });
      el.sceneEl.addEventListener('timeout', function(ev, target){
        console.log('timeout');
        timer.start(constants.TIMER);
      });
      el.sceneEl.addEventListener('gameover', function(ev, target){
        timer.stop();
      });
       }
  });
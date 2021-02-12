import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('score-counter', {
    init: function () {
      var el = this.el;
      var scoreNumber = 0;
      var score = document.getElementById("score");

      el.sceneEl.addEventListener('gameStarted', function(ev, target){
        scoreNumber= 0;
        score.setAttribute('text', {value:'Score: '+scoreNumber});
    }); 
    
      el.sceneEl.addEventListener('collided', function(ev, target){
          scoreNumber++;
          score.setAttribute('text', {value:'Score: '+scoreNumber});
      }); 
      el.sceneEl.addEventListener('gameover', function(ev, target){
        scoreNumber= 0;
        score.setAttribute('text', {value:'Score: '+scoreNumber});
    });                                
      }
  });
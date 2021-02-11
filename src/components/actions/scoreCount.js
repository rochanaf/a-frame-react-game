import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('score-counter', {
    init: function () {
      var el = this.el;
      var scoreNumber = 0;
      var score = document.getElementById("score");
    
      el.sceneEl.addEventListener('collided', function(ev, target){
          console.log("collided");
          scoreNumber++;
          score.setAttribute('text', {value:'Score: '+scoreNumber});
      });                                 
      }
  });
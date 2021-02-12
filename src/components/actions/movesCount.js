import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('moves-counter', {
    init: function () {
      var el = this.el;
      var movesLeft = 10;
      var moves = document.getElementById("movesNumber");
    
      el.sceneEl.addEventListener('ballReset', function(ev, target){
            movesLeft--;
            moves.setAttribute('text', {value:'Moves: '+movesLeft});
      });                                 
      }
  });
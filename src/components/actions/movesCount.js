import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('moves-counter', {
    init: function () {
      var el = this.el;
      var movesLeft = 10;
      var moves = document.getElementById("movesNumber");
     
      el.sceneEl.addEventListener('timeout', function(ev, target){
        emitGameOver(movesLeft,el);
        movesLeft--;
        console.log("--move reset");
        moves.setAttribute('text', {value:'Moves: '+movesLeft});
    });
    el.sceneEl.addEventListener('gameStarted', function(ev, target){
        movesLeft=10;
    });                     
      }
  });

  function emitGameOver(movesLeft,el) {
    if(movesLeft===0) {
        console.log("gameover");
        el.emit("gameover");
    }  
  }
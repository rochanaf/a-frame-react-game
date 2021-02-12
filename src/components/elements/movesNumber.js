import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('moves', {
    init: function () {
      var el = this.el;
      var scoreNumber = 0;
      var score = document.getElementById("movesNumber");
            
      score.setAttribute('text', {value:'Moves', align:'right', width:'7px', color:'black'});
      }
  });
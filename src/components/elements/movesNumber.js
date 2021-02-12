import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('moves', {
    init: function () {
      var el = this.el;
      var moves = document.getElementById("movesNumber");
      moves.setAttribute('text', {value:'Moves: 10', align:'right', width:'7px', color:'black'});
      moves.setAttribute('visible','false');
      }
  });
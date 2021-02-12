import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('end-game', {
    init: function () {
        var el = this.el;
        el.sceneEl.addEventListener('gameover', function(ev, target){
            hideSceneElements();
            showStartButton();
      });                     
      }
  });

  function hideSceneElements() {
      document.getElementById('sphere').setAttribute('visible','false');
      document.getElementById('target').setAttribute('visible','false');
      document.getElementById('score').setAttribute('visible','false');
      document.getElementById('countdown').setAttribute('visible','false');
      document.getElementById('movesNumber').setAttribute('visible','false');

  }

  function showStartButton() {
      document.getElementById("startButton").setAttribute('visible','true');
  }
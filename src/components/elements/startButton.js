import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('start-game', {
    init: function () {
      var el = this.el;
      var button = document.getElementById("startButton");
      button.setAttribute('text', {value:'START', align:'center', width:'5px', color:'black'});
    
      el.addEventListener('click', function(ev, target){
        console.log("buttonup");
        //TODO: find alternative without loading useless components
        showSceneElements();
        hideButton();
        el.emit('gameStarted');
    });                            
      }
  });

  function showSceneElements() {
      document.getElementById('sphere').setAttribute('visible','true');
      document.getElementById('target').setAttribute('visible','true');
      document.getElementById('score').setAttribute('visible','true');
      document.getElementById('countdown').setAttribute('visible','true');
  }

  function hideButton() {
      document.getElementById("startButton").setAttribute('visible','false');
  }
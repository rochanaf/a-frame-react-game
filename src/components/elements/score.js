import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('score-component', {
    init: function () {
      var el = this.el;
      var scoreNumber = 0;
      var score = document.getElementById("score");
            
      score.setAttribute('text', {value:'Score', align:'center', width:'7px', color:'black'});
      score.setAttribute('position',{x:constants.INITIALSCOREPOSITIONX,
                                            y:constants.INITIALSCOREPOSITIONY,
                                            z:constants.INITIALSCOREPOSITIONZ
                                            }); 
                                        
      }
  });
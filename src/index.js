import aframe from 'aframe';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-mouse-cursor-component';
import registerClickDrag from 'aframe-click-drag-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

require("./components/actions/throwBall.js");
require("./components/actions/collision.js");
require("./components/actions/scoreCount.js");
require("./components/actions/movesCount.js");
require("./components/actions/endGame.js");

require("./components/elements/target.js");
require("./components/elements/score.js");
require("./components/elements/startButton.js");
require("./components/elements/countdown.js");
require("./components/elements/movesNumber.js");

require('aframe-colorwheel-component');

registerClickDrag(aframe);
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="skyTexture" src="assets/sky.jpg" alt="sky"/>
          <img id="groundTexture" src="assets/ground.jpg" alt="ground"/>
          <img id="targetTexture" src="assets/targetColor.jpg" alt="target"/>

        </a-assets>

        <Entity id ="startButton" cursor-listener start-game end-game
                geometry={{primitive: 'plane', width:1, height:1}}
                material={{color:'black',opacity: 0}}
                position={{x: 0, y: 2, z: -3}}
                //TODO: custom font not working
                text={"font: mozillavr"} />
        <Entity id ="countdown" countdown
                position={{x: 0, y: 4, z: -3}}
                text={"font: mozillavr"} />
        <Entity id ="movesNumber" moves moves-counter
                position={{x: 0.5, y: 4, z: -3}}
                text={"font: mozillavr"} />
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="204" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity id="score" visible='false' score-component score-counter text={"font: mozillavr"}/>
        <Entity id="target" visible='false' primitive="a-plane" 
        geometry={{primitive: 'plane'}}
        src="#targetTexture" 
        position={{x: 0, y: 1.5, z: -8}} 
        target check-collision/>
        <Entity id="sphere"
          throw-ball
          click-drag
          visible='false'
          geometry={{primitive: 'sphere', radius:0.1}}
          material={{color:'#ffb8c1',opacity: 0.6}}
          position={{x: 0, y: 1.5, z: -0.5}}
        ></Entity>

        <Entity id="camera" camera look-controls-enabled="false" mouse-cursor position="0 1.6 0"> 
          <Entity id="cursor" cursor="rayOrigin: mouse; fuse: false" />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));

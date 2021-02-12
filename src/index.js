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

require("./components/elements/target.js");
require("./components/elements/score.js");
require("./components/elements/startButton.js");

// require('aframe-physics-system');

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
          <img id="playButton" src="assets/play.jpg" alt="play"/>
        </a-assets>

        <Entity id ="startButton" cursor-listener start-game
                geometry={{primitive: 'plane', width:1, height:1}}
                material={{color:'black',opacity: 0}}
                position={{x: 0, y: 2, z: -3}} />
        <Entity primitive="a-plane" color="green" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity id="score" visible='false' score-component score-counter text />
        <Entity id="target" visible='false' primitive="a-plane" color="red" position={{x: 0, y: 1.5, z: -8}} height="1" width="1"target check-collision/>
        <Entity id="sphere"
          throw-ball
          click-drag
          visible='false'
          geometry={{primitive: 'sphere', radius:0.1}}
          material={{color:'black',opacity: 0.6}}
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

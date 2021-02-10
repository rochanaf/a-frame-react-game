import 'aframe';
import 'aframe-animation-component';
import 'aframe-mouse-cursor-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="skyTexture" src="assets/sky.jpg"/>
        </a-assets>

        <Entity primitive="a-plane" color="green" rotation="-70 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
       
         <Entity primitive="a-plane" color="red" position={{x: 0, y: 5, z: -8}}/>

        <Entity id="sphere"
          geometry={{primitive: 'sphere', radius:0.1}}
          material={{color:'black',opacity: 0.6}}
          position={{x: 0, y: 1.5, z: -0.5}}
        ></Entity>

        <Entity id="camera" camera look-controls-enabled="false" mouse-cursor position="0 1.6 0"> 
          <Entity id ="cursor" cursor="rayOrigin: mouse; fuse: false" />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));

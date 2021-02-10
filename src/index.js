import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
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

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));

import React from 'react';
import './App.css';



class App extends React.Component {

  render() {
    const keys = ['Q','W','E','A','S','D','Z','X','C'];
    const sounds = [
      {
        key: 'Q',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
      },
      {
        key: 'W',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
      },
      {
        key: 'E',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
      },
      {
        key: 'A',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
      },
      {
        key: 'S',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
      },
      {
        key: 'D',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
      },
      {
        key: 'Z',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
      },
      {
        key: 'X',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
      },
      {
        key: 'C',
        mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
      },
    ];
    
    return (
      <Drum sounds={sounds}/>
      )
  }
  
}

const Drum = (props) => (
  <div id="drum-machine" className="container">
    <div id="display" className="display">
      {props.sounds.map((sound, idx) => (
        <Box text={sound.key} key={idx} audio={sound.mp3}/>
      ))}
    </div>
  </div>
)

// const Box = (props) => (
//   <div className="box">
//     {props.text}
//   </div>
// )
class Box extends React.Component {
  render() {
    return (
      <div className="box">
        {this.props.text}
        <audio />
      </div>
    )
  }
}

export default App;

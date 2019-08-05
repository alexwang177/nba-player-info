import React from 'react';
import './App.css';
import Title from './Components/Title.js';
import Player from './Components/Player.js';
import Team from './Components/Team.js';
import Form from './Components/Form.js';

class App extends React.Component{
  
  render(){
    return (
      <div className="App">
        <Title />
        <Form />
        <Player />
        <Team />
      </div>
    );
  }
}

export default App;

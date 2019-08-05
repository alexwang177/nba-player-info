import React from 'react';
import './App.css';
import Title from './Components/Title.js';
import Player from './Components/Player.js';
import Team from './Components/Team.js';
import Form from './Components/Form.js';

const API_KEY = '1c1db10603msh7e97996b2669453p17f294jsna5763e88a5c5';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      position: undefined,
      team: undefined,
      conference: undefined,
      error: undefined
    }
    this.getPlayer = this.getPlayer.bind(this);
  }

  getPlayer(e){
    e.preventDefault();
    const searchName = e.target.elements.playerName.value;
    fetch(`https://free-nba.p.rapidapi.com/players?search=${searchName}`, 
      {
        method: 'GET', 
        headers: {
          'X-RapidAPI-Key' : API_KEY
        }
      }
    )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        firstName: data.data[0].first_name,
        lastName: data.data[0].last_name,
        position: data.data[0].position,
        team: data.data[0].team.full_name,
        conference: data.data[0].team.conference,
        error: ''
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  render(){
    return (
      <div className="App">
        <Title />
        <Form getPlayer = {this.getPlayer}/>
        <Player 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          position={this.state.position}
          error={this.state.error}
        />
        <Team 
          team={this.state.team}
          conference={this.state.conference}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

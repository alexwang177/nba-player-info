import React from 'react';
import './App.css';
import Title from './Components/Title.js';
import Player from './Components/Player.js';
import Team from './Components/Team.js';
import Form from './Components/Form.js';
import List from './Components/List.js';
import Pagination from './Components/Pagination.js'

const API_KEY = '1c1db10603msh7e97996b2669453p17f294jsna5763e88a5c5';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      playerList: [],
      firstName: undefined,
      lastName: undefined,
      position: undefined,
      team: undefined,
      conference: undefined,
      error: undefined,
      showInfo: false,
      showList: false,
      currentPage: 1,
      postsPerPage: 8
    }
    this.getPlayer = this.getPlayer.bind(this);
  }

  displayPlayer = (player) => {
    console.log(player);
    this.setState({
      playerList: [],
      firstName: player.first_name,
      lastName: player.last_name,
      position: player.position,
      team: player.team.full_name,
      conference: player.team.conference,
      error: '',
      showInfo: true,
      showList: false
    })
  }

  getPlayer(e){
    e.preventDefault();
    const searchName = e.target.elements.playerName.value;
    if(searchName!='')
    {
      fetch(`https://free-nba.p.rapidapi.com/players?search=${searchName}&per_page=100`, 
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
            playerList: data.data,
            firstName: data.data[0].first_name,
            lastName: data.data[0].last_name,
            position: data.data[0].position,
            team: data.data[0].team.full_name,
            conference: data.data[0].team.conference,
            error: '',
            showInfo: false,
            showList: true
          })
      })
      .catch(err => {
        console.log(err)
      })
    } 
  }

  // Change page
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })
  }

  render(){
  // Get Current Players from List
  const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
  const currentPosts = this.state.playerList.slice(indexOfFirstPost,indexOfLastPost);
    
    return (
      <div className="App container">
        <div className="row">
          <div className='col-xl-4'><img src="https://66.media.tumblr.com/tumblr_mbfg0krUZq1qdxo4co1_500.jpg" className="rounded border border-dark m-3" id="jordan" alt="MJ"></img></div>        
          <div className='col-xl-8'>
            <Title />
            <Form getPlayer = {this.getPlayer}/>
            <hr/>
            {this.state.showList && (<List playerList={currentPosts} displayPlayer={this.displayPlayer}/>)} 
            <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.playerList.length} paginate={this.paginate}/>
            <div className="row">
              <div className="col-md-6">       
                {this.state.showInfo && (<Player id='playerCard'
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  position={this.state.position}
                  error={this.state.error}
                />)}
              </div>   
              <div className="col-md-6">          
                {this.state.showInfo && (<Team id='teamCard'
                  team={this.state.team}
                  conference={this.state.conference}
                  error={this.state.error}
                />)}
              </div>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';

class Form extends React.Component{
  
  render(){
    return (
      <form onSubmit={this.props.getPlayer}>
          <input type='text' name='playerName' placeholder="Enter a player's name..."></input>
          <button>Search</button>
      </form>
    );
  }
}

export default Form;
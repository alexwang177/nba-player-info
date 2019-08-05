import React from 'react';

class Player extends React.Component{
  
  render(){
    return (
      <div>
        <h2>{this.props.firstName}</h2>
        <h2>{this.props.lastName}</h2>
        <h3>Position: {this.props.position}</h3>
      </div>
    );
  }
}

export default Player;
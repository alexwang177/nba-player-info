import React from 'react';

class Team extends React.Component{
  
  render(){
    return (
      <div>
        <h2>{this.props.team}</h2>
        <h3>Conference: {this.props.conference}</h3>
      </div>
    );
  }
}

export default Team;
import React from 'react';

class Player extends React.Component{
  
  render(){
    let cardStyle = {display:'none'};
    return (
      <div className='card bg-dark' style={cardStyle}>
        <h2 className='text-light display-2' style={cardStyle}>{this.props.firstName}</h2>
        <h2 className='text-light display-2'>{this.props.lastName}</h2>
        <h3 className='text-light display-2 card-footer'>{this.props.position}</h3>
      </div>
    );
  }
}

export default Player;
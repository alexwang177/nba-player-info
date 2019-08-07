import React from 'react';

class Player extends React.Component{
  
  render(){
    //let cardStyle = {display:'none'};
    return (
      <div className='card bg-dark'>
        <p className='text-light'>{this.props.firstName}</p>
        <p className='text-light'>{this.props.lastName}</p>
        <p className='text-light card-footer'>{this.props.position}</p>
      </div>
    );
  }
}

export default Player;
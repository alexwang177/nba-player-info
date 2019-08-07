import React from 'react';

class Player extends React.Component{
  
  render(){
    const cardStyle = {
      width:'22em',
      height: '15em',
      marginTop: '22%'
    };

    const textStyle = {
      marginTop: '12%'
    };

    return (
      <div className='card bg-dark' style={cardStyle}>
        <p className='text-light' style={textStyle}>{this.props.firstName} {this.props.lastName}</p>
        <p className='text-light' style={textStyle}>{this.props.position}</p>
      </div>
    );
  }
}

export default Player;
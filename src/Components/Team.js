import React from 'react';

class Team extends React.Component{
  
  render(){
    const cardStyle = {
      width:'22em',
      height: '15em',
      margin: '1em auto'
    };

    const textStyle = {
      marginTop: '12%'
    };

    return (
      <div className='card bg-dark' style={cardStyle}>
        <p className='text-light' style={textStyle}>{this.props.team}</p>
        <p className='text-light' style={textStyle}>{this.props.conference}</p>
      </div>
    );
  }
}

export default Team;
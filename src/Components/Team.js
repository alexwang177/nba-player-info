import React from 'react';

class Team extends React.Component{
  
  render(){
    //let cardStyle = {display:'none'};
    return (
      <div className='card bg-dark'>
        <p className='text-light card-body'>{this.props.team}</p>
        <p className='text-light card-footer'>{this.props.conference}</p>
      </div>
    );
  }
}

export default Team;
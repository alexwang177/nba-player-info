import React from 'react';

class Team extends React.Component{
  
  render(){
    //let cardStyle = {display:'none'};
    return (
      <div className='card bg-dark'>
        <h2 className='text-light display-2 card-body'>{this.props.team}</h2>
        <h2 className='text-light display-2 card-footer'>{this.props.conference}</h2>
      </div>
    );
  }
}

export default Team;
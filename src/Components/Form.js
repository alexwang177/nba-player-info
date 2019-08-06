import React from 'react';

class Form extends React.Component{
  
  render(){
    return (
      <form className='form-group' onSubmit={this.props.getPlayer}>
          <input type='text' className='form-control' name='playerName' placeholder="Enter a player's name..."></input>
          <button className='btn btn-primary mt-4' type='submit'>Search</button>
      </form>
    );
  }
}

export default Form;
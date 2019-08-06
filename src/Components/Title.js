import React from 'react';

class Title extends React.Component{
  
  render(){
    return (
      <div className='m-4'>
        <h1 className='page-header mb-3'>NBA Player Information</h1>
        <p className='lead'>Search for your favorite players</p>
      </div>
    );
  }
}

export default Title;
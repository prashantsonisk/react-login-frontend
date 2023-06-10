import React from 'react';
import {NavLink} from 'react-router-dom';

const Errorpage = () => {
  return (
    <div className="container-fluid">
      <div className="not_found">
          <h1>404</h1>
          <div className="number404">
            <h3>We are sorry, page not found!</h3>
            <p>The Page you are looking for might have been removed had its name changed or its temporarily unvaible</p>
          </div>  
          <div className="btnDiv">
            <h5 className='backBtn'><NavLink to='/'>Back To Homepage</NavLink></h5>
          </div>
      </div>
    </div>
  )
}


export default Errorpage
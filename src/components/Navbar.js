import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {

  const{ state, dispatch } = useContext(UserContext);

  const RenderMwnu = () => {
    if(state){
      console.log(state);
      return(
        <>
          <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Me</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item"> 
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
              </li>
        </>
      )
    }else{
      return(
         <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Me</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Registration</NavLink>
              </li>
         </>
      )
    }
  }

  return (
    <>
       <nav className="navbar navbar-expand-md navbar-dark bg-primary p-3">
          <NavLink className="navbar-brand font-weight-bold" to="/">MY LOGIN</NavLink>   
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <RenderMwnu />
            </ul>
          </div>  
        </nav>
    </>
  )
}

export default Navbar
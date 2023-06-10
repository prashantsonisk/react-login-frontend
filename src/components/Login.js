import React, { useContext, useState } from 'react'
import './style.css';
import login from '../images/icon-user.png';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {
  const {state, dispatch} = useContext(UserContext)
  const navigate = useNavigate();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async(e) =>{
    e.preventDefault();

    if(email == "" || password==""){
        window.alert('Please fill the all fields!')
    }else{
       
      const res = await fetch('/signin', {
          method:'POST',
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify({
              email, password        
          })
        });
        
          const data = res.json();
    
          if (res.status === 400 || !data) {
            window.alert('Please fill the all fields');
          }else{
            dispatch({type: 'USER', payload:true})
            window.alert('Login successfull!');
            navigate('/about');
          }
    }
  }

  return (
    <div><br/>
      <div className='container'>
        <div className='row'>  
          <div className='col-md-5 m-auto'>
            <form method='POST' className='login-form pt-3 pr-5 pl-5 pb-3 shadow-lg'>            
              <h3 className='pt-2 text-center mb-0'>Hello Again!</h3>
              <p className='text-center text-secondary my-1'>Explore More by connecting with us</p>
              <img src={login} className='user-icon-login' alt='login' title='Login'/>
              <input type='email' className='form-control mb-3' placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} />
              <input className='form-control' placeholder='Your password' type='password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} />
              <button type='button' className='btn btn-primary mt-4 btn-login' onClick={handleLogin}>Let's Go</button>
              <p className='text-center mt-3'>Not a Member? <NavLink className='text-danger' to='/signup'>Register Now</NavLink></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
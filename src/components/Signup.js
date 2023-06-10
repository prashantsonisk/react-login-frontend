import React, { useState } from 'react'
import './style.css';
import register from '../images/register.jpg';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate = useNavigate();
 
    const [user, setUser] = useState({
    name:"", email:"" , phone:"" , work:"" , password:""
   });

   let name,value; 
   const havndleInput = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setUser({...user,[name]:value});
     
   }

  //  Store data into database
  const postData = async(e) =>{
    e.preventDefault();
    
    const {name, email, phone, work, password} = user;
    if(user.name == "" || user.email == "" || user.phone == "" || user.work == "" || user.password == ""){
      window.alert("Please fill the all fields!");
    }
    else{
    const res = await fetch('/register', {
      method:'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
          name, email, phone, work, password
      })
  
    });
    
    // const data = await res.json();
    // console.log(data.status);
    // if (data.status == 201) {
    //   console.log('Registration successfull');
    // }
    // else
    // {
    //   throw new Error(`Request : ${data.status}`); 
    // }


    // if(data.status === 422 || !data){
    //   window.alert('Invalid registration');    
    //   console.log('Invalid registration');    
    // }
    // else
    // {
    //   window.alert('Registration successfull');    
    //   console.log('Registration successfull');    
    //   navigate('/login');
    // }
  }

  }

  return (
    <div><br/>
       <div className='container shadow m-auto col-md-8 signup-form'>
        <div className='row'>  
            <div className='container col-md-4 p-4'>
              <form method='POST'>            
                <h3 className='mb-4'>Signup</h3>
                <div className='row'>
                  <div className='col-md-12'>
                    <span className='user-icon'><i className='fa fa-user'></i></span>
                    <input className='form-control mb-3' type='text' placeholder='Enter your name' id='name' name='name' value={user.name} onChange={havndleInput} />
                    <span className='mail-icon'><i className='fa fa-envelope'></i></span>
                    <input className='form-control mb-3' placeholder='Enter your email' value={user.email} id='email' name='email' onChange={havndleInput} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <span className='phone-icon'><i className='fa fa-phone'></i></span>
                    <input className='form-control mb-3' placeholder='Enter your Phone' type='text' id='phone' name='phone' value={user.phone} onChange={havndleInput}/>
                    <span className='work-icon'><i className='fa fa-briefcase'></i></span>
                    <input className='form-control mb-3' placeholder='Your position' type='text' id='work' name='work' value={user.work} onChange={havndleInput}/>
                    <span className='lock-icon'><i className='fa fa-lock'></i></span>
                    <input className='form-control' placeholder='Your password' type='password' id='password' name='password' value={user.password} onChange={havndleInput}/>
                    <button type='button' className='btn btn-primary mt-4 btn-block reg-btn' onClick={postData}>Register</button>
                    <span className='login-link d-block d-md-none'><NavLink to='/login'>Do you have already account?</NavLink></span>
                  </div>
                </div>
              </form>        
            </div>
          <div className='container col-md-6 p-5 reg-img'>
           <img src={register} className='img-fluid mt-4 ml-4' alt='register' title='Register'/>
           <span className='text-center login-link text-dark'><NavLink to='/login' className='text-center text-dark'>Do you have already account?</NavLink></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
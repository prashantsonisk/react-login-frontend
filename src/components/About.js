import React, { useEffect, useState } from 'react'
import './style.css';
import me from '../images/me.png';
import {useNavigate} from 'react-router-dom';

const About = () => {
  // ankush@gmail.com
  const navigate = useNavigate();

  const[userData, setUserData] = useState({});

  const callAboutPage = async() =>{
    try {
      const res = await fetch('/about',{
            method: "GET",
            headers:{
              Accept: "application/json",
              "content-type": "application/json",
            },
            credentials:'include'
      });
     
      const data = await res.json();
      setUserData(data)
      
      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      
    } catch (err) {
      console.error(err);
      navigate('/login');
    }
  } 

  useEffect(() => {
    callAboutPage();
  },[]);

  useEffect(() => {
    // console.log(userData);
  }, [userData]);


  // const handleLogout = ()=>{
  //   document.cookie = 'cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  //   // Redirect to the logout page or any other desired location
  //   navigate('/login');
  // }

  

  return (    
    <>
      <form method='GET'>
      <div className="container col-md-8 col-sm-12 mt-4 shadow-lg rounded pt-4 pb-2">
          <div className="row">
            <div className="col-md-2 user-img">
              <img src={me} />
              <p className='textChngeImg'>Change Image</p>
            </div>
            <div className="col-md-4">
              <h2><b>{userData.name}</b></h2>
              <p><span className="badge badge-warning">Full-Stack Developer</span></p>
              <p className='text-primary'>Hacker rank - 10</p>
            </div>
            {/* <div className="col-md-6">
                <button type='button' className='btn btn-sm btn-warning float-right' onClick={handleLogout}>Logout</button>
            </div> */}
          </div>      
          <div className="row my-3 border-top pt-4">
            <div className="col-md-3">
              <div className="lists">
                  <li>Youtuber</li>
                  <li>Freelancer</li>
                  <li>Mentor</li>
                  <li>Photoshop</li>
                  <li>Figma</li>
                  <li>Linkedin</li>
                  <li>Instagram</li>
              </div>
            </div>
            <div className="col-md-9">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#home">About me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#menu1">Timelines</a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="home" className="container tab-pane active"><br/>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                      <li>User Id</li>
                      <li>Name</li>
                      <li>Phone</li>
                      <li>Profession</li>
                      <li>Linkedin Profile</li>
                      <li>Facebook Profile</li>
                      <li>Instagram Profile</li>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="lists-about">
                          <li>{userData._id}</li>
                          <li>{userData.name}</li>
                          <li>+91-{userData.phone}</li>
                          <li style={{"textTransform":"capitalize"}}>{userData.work}</li>
                          <li>https://linkedin.com/prashant</li>
                          <li>https://facebook.com/prashant</li>
                          <li>https://instagram.com/prashant</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu1" className="container tab-pane fade"><br/>
                  <h3>Timelines</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
          </div>    
      </div>
      </form>  
    </>
  )
}

export default About
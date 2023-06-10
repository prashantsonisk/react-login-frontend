import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const[userName, setUserName] = useState(' ');
  const[show, setShow] = useState(false);

  const callHomePage = async() =>{
    try {
      const res = await fetch('/getData',{
            method: "GET",
            headers:{
              "content-type": "application/json",
            },
      });
     
      const data = await res.json();
      setUserName(data.name);
      setShow(true);

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      
    } catch (err) {
      console.error(err);
      // navigate('/login');
    }
  } 

  useEffect(() => {
    callHomePage();
  },[]);

  useEffect(() => {
    // console.log(userData);
  }, [userName]);

  const getTxt1 = '<';
  const getTxt4 = '/>';

  return (
    <div id='main-body'>
      <div className="container-fluid main-home">
        <div className="content">
          <div className="title">
            <h1 className='text-center py-3'>{userName}</h1>
            <h1>{getTxt1} <span className='text-primary'>{show ? 'Happy, to see you back' : 'We are the MERN developer'}</span> {getTxt4}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
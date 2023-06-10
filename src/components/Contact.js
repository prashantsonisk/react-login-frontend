import React,{useState, useEffect} from 'react'
import './style.css';
import phone from '../images/phone.png';
import mail from '../images/mail.png';
import web from '../images/web.png';
import {useNavigate} from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate();

  const[userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

  const callContactPage = async() =>{
    try {
      const res = await fetch('/getData',{
            method: "GET",
            headers:{
              "content-type": "application/json",
            },
      });
     
      const data = await res.json();
      setUserData({...userData, name:data.name, email:data.email, phone:data.phone})
      
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
    callContactPage();
  },[]);

  useEffect(() => {
    // console.log(userData);
  }, [userData]);

const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]: value});
}

// send data into backend

const formSubmit = async(e) => {
    e.preventDefault();

    const {name, email, phone, message} = userData;
     const res = await fetch('/contact', {
          method: 'POST',
          headers: {
                'content-type': 'application/json'
          },
          body: JSON.stringify({
              name, email, phone, message
          })
     })

     const data = await res.json();
     if (!data){
      alert('Message not sent');
     }
     else{
      alert('Message sent')
      setUserData({...userData, message:''})
     }
}



  return (
    <>
    {/* Top infobar */}
      <div className='contact_info m-4'>
        <div className='container m-auto border'>
          <div className="row">
              <div className="col-md-4 col-sm-12 justify-content-start d-flex align-items-center p-4">
                <img src={phone} alt='phone' />
                  <div className="contact_info_content">
                      <div className="contact_info_title font-weight-bold ml-2">
                        Phone
                      </div>    
                      <div className="contact_info_text ml-2">
                       +91-3217-411-657
                      </div>    
                  </div>
              </div>

              <div className="col-md-4 col-sm-12 justify-content-start d-flex align-items-center border p-4">
                <img src={mail} alt='mail' />
                  <div className="contact_info_content">
                      <div className="contact_info_title font-weight-bold ml-2">
                        Email address
                      </div>    
                      <div className="contact_info_text ml-2">
                       prashantsoni.skg@gmail.com
                      </div>    
                  </div>
              </div>
              
              <div className="col-md-4 col-sm-12 justify-content-start d-flex align-items-center p-4">
                <img src={web} alt='web' />
                  <div className="contact_info_content">
                      <div className="contact_info_title font-weight-bold ml-2">
                        Address
                      </div>    
                      <div className="contact_info_text ml-2">
                       A23 Satellite City, 590059 Ahmedabad ,Gujarat (IND)
                      </div>    
                  </div>
              </div>
            </div>
          </div>
      </div>

      {/* Contact us form  */}
      <div className="container col-md-8 col-sm-12 m-auto shadow rounded pr-5 pl-5 pt-4 pb-2">
          <h2 className='font-weight-bold text-center mb-2'>Get in Touch</h2>
          <form id='contact_formm' method="post">
            <div className="row my-4">
              <div className="col-md-4 col-sm-12">
                <input type="text" className='form-control mb-2' id='contact_form_name' onChange={handleInput} name='name' value={userData.name}/> 
              </div>
              <div className="col-md-4 col-sm-12">
                <input type="text" className='form-control mb-2' id='contact_form_email' onChange={handleInput} name='email' value={userData.email}/> 
              </div>
              <div className="col-md-4 col-sm-12">
                <input type="text" className='form-control' id='contact_form_phone' onChange={handleInput} name='phone' value={userData.phone}/> 
              </div>
            </div>
            <div className="row pl-3 pr-3 my-2">
              <textarea placeholder='Please type your query.' rows={5} className='form-control' name='message' value={userData.message} onChange={handleInput}></textarea>
              <button className='btn btn-danger mt-4' onClick={formSubmit}>Send Message</button>
            </div>
          </form>
      </div>
    </>
  )
}

export default Contact
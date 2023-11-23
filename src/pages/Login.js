import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import image09 from '../images/image09.jpeg'
import '../stylesheets/Login.css'


const Login = () => {
    const data=useLocation().state.Submiteddata;
    const navigate = useNavigate();

    const [loginData,setLoginData]=useState(
        {
          username:'',
          password:'',
        }
        );

        const handleChange=(e)=>{
            const{name, value}=e.target;
            setLoginData({
              ...loginData,
              [name]: value,
            })
          }
          
          const handleSubmit = (e) => {e.preventDefault();
            // navigate('/Dashboard', {state:{ Submitteddata: loginData}});
    
            if(data.emailAddress===loginData.emailAddress && data.password===loginData.password){
              navigate('/Home', {state:{ Submiteddata: loginData}});
            }
            else{
                alert("Worng Credentials")
              navigate('/Registration')
            }
          }
    
        
  return (
   <div className='login-all'>
     <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email Address</label> <br />
        <input type="text" placeholder='User Name' name='emailAddress' onChange={handleChange}  /> <br />
        <label htmlFor="">Password</label> <br />
        <input type="password" placeholder='Password' name='password'  onChange={handleChange}  /> <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
   </div>
  )
}

export default Login

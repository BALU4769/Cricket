import React, { useState } from 'react'
import '../stylesheets/Registration.css'
import { useNavigate } from 'react-router-dom'
import image09 from '../images/image09.jpeg'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Registration = () => {

  const navigate=useNavigate();

  const [formdata,setFormdata]=useState(
    {
      firstName:'',
      lastName:'',
      emailAddress:'',  
      dateOfBirth:'',
      gender:'',
      password:'',
    }
    );
    
  
    const handleChange=(event)=>{
     
        const {name,value}=event.target;
        setFormdata(
            {
                ...formdata,
                [name]:value,
            }
        )
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("form data", formdata)
        setFormdata({
            firstName:'',
            lastName:'',
            emailAddress:'',  
            dateOfBirth:'',
            gender:'',
            password:'',
        });
        navigate('/Login',{state:{Submiteddata:formdata}});
    }
  return (
    <div className='all'>
      <div className='both'>
      {/* <div className='left'>
      <img src={image09} width="80%" height="605px" />
      </div> */}
        <div className='right'>
        <form  onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div>
            <label htmlFor="">FirstName</label><br />
            <input type="text" placeholder='Enter FirstName' onChange={handleChange} name='firstName' value={FormData.firstName} required />
            </div>
            <div>
            <label htmlFor="">LastName</label><br />
            <input type="text" placeholder='Enter LastName' onChange={handleChange} name='lastName'  value={FormData.lastName} required />
            </div>
            <div>
            <label htmlFor="">Email Address</label><br />
            <input type="email" placeholder='Enter Email Address' onChange={handleChange} name='emailAddress' value={FormData.emailAddress} required />
            </div>
            <div>
            <label htmlFor="">Date of Birth</label><br />
            <input type="date" placeholder='Enter DateofBirth' onChange={handleChange} name='dateOfBirth' value={FormData.dateOfBirth} required />
            </div>
            <div className='gender'>
            {/* <label htmlFor="">Gender</label><br />
            <input type="checkbox"  onChange={handleChange} name='gender' value={FormData.gender} /> 
             <label htmlFor="" className='genders'>Male</label> 
            &nbsp;<input type="checkbox" onChange={handleChange} name='gender' value={FormData.gender}  /> <label htmlFor="" className='genders'>Female</label>  */}
             <input type="radio" name='gender' value="male" checked={formdata.gender==='male'} onChange={handleChange}  />Male
             <input type="radio" name='gender' value="female" checked={formdata.gender==='female'} onChange={handleChange}  />Female
            </div>

            <div>
            <label htmlFor="">Enter Password</label><br />
            <input type="password" placeholder='Enter password' onChange={handleChange} name='password' value={FormData.password} required />
            </div>
            <div>
              <button type='submit' onClick={handleSubmit}>Register</button>
            </div>
            
        </form>
        </div>
      
    </div>
    </div>
  )
}

export default Registration

import React, { useState } from "react";
import "../stylesheets/Registration.css";
import { useNavigate } from "react-router-dom";
import image09 from "../images/image09.jpeg";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Registration = () => {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    dateOfBirth: "",
    gender: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate firstName
    if (!formdata.firstName.trim()) {
      newErrors.firstName = "firstName is required";
      isValid = false;
    }
     // Validate firstName
     if (!formdata.lastName) {
      newErrors.lastName = "lastName is required";
      isValid = false;
    }

    // Validate emailAddress
    const emailAddressRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formdata.emailAddress || !emailAddressRegex.test(formdata.emailAddress)) {
      newErrors.emailAddress = "Valid emailAddress is required";
      isValid = false;
    }

    const validatePassword = (password) => {
      // Minimum length of 6 characters
      if (password.length < 6) {
        return "Password must be at least 6 characters";
      }
      // At least one lowercase letter
      if (!/[a-z]/.test(password)) {
        return "Password must include at least one lowercase letter";
      }
      // At least one uppercase letter
      if (!/[A-Z]/.test(password)) {
        return "Password must include at least one uppercase letter";
      }
      // At least one digit
      if (!/\d/.test(password)) {
        return "Password must include at least one digit";
      }
      // At least one special character
      if (!/[@$!%*?&]/.test(password)) {
        return "Password must include at least one special character";
      }
      // If all conditions pass, return null (indicating no error)
      return null;
    };

    // Inside your validation logic:
    const passwordError = validatePassword(formdata.password);
    if (passwordError) {
      newErrors.password = passwordError;
      isValid = false;
    }

    // Validate confirmPassword
    if (formdata.password !== formdata.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form data", formdata);
    setformdata({
      firstName: "",
      lastName: "",
      emailAddressAddress: "",
      dateOfBirth: "",
      gender: "",
      password: "",
    });
    navigate("/Login", { state: { Submiteddata: formdata } });
    if (validateForm()) {
      // Perform registration logic here
      console.log("Registration successful!", formdata);
      // You can send the form data to the server or perform other actions as needed
    } else {
      console.log("Form validation failed");
    }
  };
  return (
    <div className="all">
      <div className="both">
        {/* <div className='left'>
      <img src={image09} width="80%" height="605px" />
      </div> */}
        <div className="right">
          <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div>
              <label htmlFor="">FirstName</label>
              <br />
              <input
                type="text" 
                placeholder="Enter FirstName"
                onChange={handleChange}
                name="firstName"
                value={formdata.firstName}
                style={{ borderColor: errors.firstName ? "red" : "" }}
              />
              {errors.firstName && (
            <span style={{ color: "red" }}>{errors.firstName}</span>
          )}

            </div>
            <div>
              <label htmlFor="">LastName</label>
              <br />
              <input
                type="text"
                placeholder="Enter LastName"
                onChange={handleChange}
                name="lastName"
                value={formdata.lastName}
                style={{ borderColor: errors.lastName ? "red" : "" }}
              />
              {errors.lastName && (
            <span style={{ color: "red" }}>{errors.lastName}</span>
          )}
            </div>
            <div>
              <label htmlFor="">emailAddress </label>
              <br />
              <input
                type="emailAddress"
                placeholder="Enter emailAddress Address"
                onChange={handleChange}
                name="emailAddressAddress"
                value={formdata.emailAddressAddress}
                style={{ borderColor: errors.emailAddress ? "red" : "" }}
              />
                {errors.emailAddress && <span style={{ color: "red" }}>{errors.emailAddress}</span>}
            </div>
            <div>
              <label htmlFor="">Date of Birth</label>
              <br />
              <input
                type="date"
                placeholder="Enter DateofBirth"
                onChange={handleChange}
                name="dateOfBirth"
                value={formdata.dateOfBirth}
                
              />
            </div>
            <div className="gender">
              {/* <label htmlFor="">Gender</label><br />
            <input type="checkbox"  onChange={handleChange} name='gender' value={formdata.gender} /> 
             <label htmlFor="" className='genders'>Male</label> 
            &nbsp;<input type="checkbox" onChange={handleChange} name='gender' value={formdata.gender}  /> <label htmlFor="" className='genders'>Female</label>  */}
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formdata.gender === "male"}
                onChange={handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formdata.gender === "female"}
                onChange={handleChange}
              />
              Female
            </div>

            <div>
              <label htmlFor="">Enter Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                name="password"
                value={formdata.password}
                style={{ borderColor: errors.password ? "red" : "" }}
              />
               {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
            </div>
            <div>
              <button type="submit" onClick={handleSubmit}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import "../stylesheets/Registration.css";
import axios from "axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dateOfBirth:"",
    gender:"",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting , setSubmitting] = useState(false);
  const [error, setError] = useState('');
  

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Valid email is required";
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
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      newErrors.password = passwordError;
      isValid = false;
    }

    // Validate confirmPassword
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Send the form data to the server
      const response = await axios.post('http://localhost:5000/registration', formData);
      console.log(response.data);
      setError('');
      alert('Login successfully.');
    } catch (error) {
      console.error(error);
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }

    // if (validateForm()) {
    //   // Perform registration logic here
    //   console.log("Registration successful!", formData);
    //   // You can send the form data to the server or perform other actions as needed
    // } else {
    //   console.log("Form validation failed");
    // }

  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label> <br />
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ borderColor: errors.username ? "red" : "" }}
          /> <br />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? "red" : "" }}
          />
          <br />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
              <label htmlFor="">Date of Birth</label>
              <br />
              <input
                type="date"
                placeholder="Enter DateofBirth"
                onChange={handleChange}
                name="dateOfBirth"
                value={formData.dateOfBirth}
                
              />
            </div>

            <div className="gender">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </div>

        <div>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ borderColor: errors.password ? "red" : "" }}
          />
          <br />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label><br />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ borderColor: errors.confirmPassword ? "red" : "" }}
          />
          <br />
          {errors.confirmPassword && (
            <span style={{ color: "red" }}>{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;

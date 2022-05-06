import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Layout from '../shared/Layout';


function SignUpForm({ setUser }) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    first_name: "",
    last_name: ""
  });
  const [isSigningUp, setIsSigningUp] = useState(false);

  let history = useHistory()

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function signInSuccess(user) {
    setUser(user)
    history.push("/")
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (isSigningUp) {
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(user => signInSuccess(user));
    } 
    else {
      fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((r) => r.json())
      .then(user => signInSuccess(user));
      }
    }

  function handleSignUpStateChange() {
    setIsSigningUp(!isSigningUp);
  }

  return (
    <Layout>
      <div className='form container'>

      {isSigningUp?

        <form onSubmit={handleFormSubmit}>
          <h1>S I G N - U P</h1>
          <input
            type="text"
            name="email"
            placeholder='Email'
            autoComplete="off"
            value={formData.email}
            className='nomad-input'
            onChange={handleFormChange}
          />

          <input
            type="text"
            name="first_name"
            placeholder='First Name'
            autoComplete="off"
            value={formData.first_name}
            className='nomad-input'
            onChange={handleFormChange}
          />

          <input
            type="text"
            name="last_name"
            placeholder='Last Name'
            autoComplete="off"
            value={formData.last_name}
            className='nomad-input'
            onChange={handleFormChange}
          />    

          <input
            type="text"
            name="username"
            placeholder='Username'
            autoComplete="off"
            value={formData.username}
            className='nomad-input'
            onChange={handleFormChange}
          />

          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            className='nomad-input'
            onChange={handleFormChange}
            autoComplete="current-password"
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder='Password Confirmation'
            value={formData.password_confirmation}
            className='nomad-input'
            onChange={handleFormChange}
            autoComplete="current-password"
          />

          <div className="submit-btn">
            <button className='button is-black nomad-btn submit' type="submit">
              SIGN UP
            </button>
          </div>

          <div className="submit-btn">
            <button className='button is-black nomad-btn submit' type="submit" 
            onClick={handleSignUpStateChange}>
              Already have an account? Login
            </button>
          </div>

        </form>

        : 

        <form onSubmit={handleFormSubmit}>
          <h1>L O G I N</h1>

          <input
            type="text"
            name="username"
            placeholder='Username'
            autoComplete="off"
            value={formData.username}
            className='nomad-input'
            onChange={handleFormChange}
          />

          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            className='nomad-input'
            onChange={handleFormChange}
            autoComplete="current-password"
          />

          <div className="submit-btn">
            <button className='button is-black nomad-btn submit' type="submit">
              LOGIN
            </button>
          </div>

          <div className="submit-btn">
            <button className='button is-black nomad-btn submit' 
            onClick={handleSignUpStateChange}>
              Don't have an account? Sign up
            </button>
          </div>
        </form>
        }

      </div>
    </Layout>
  )
}

export default SignUpForm
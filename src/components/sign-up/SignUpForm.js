import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Layout from '../shared/Layout';


function SignUpForm({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        email,
        firstName,
        lastName,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        return history.push("/")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }



  return (
    <Layout>
      <div className='form container'>
        <h1>S I G N - U P</h1>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            id="email"
            placeholder='Email'
            autoComplete="off"
            value={email}
            className='nomad-input'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            id="first_name"
            placeholder='First Name'
            autoComplete="off"
            value={firstName}
            className='nomad-input'
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            id="last_name"
            placeholder='Last Name'
            autoComplete="off"
            value={lastName}
            className='nomad-input'
            onChange={(e) => setLastName(e.target.value)}
          />    

          <input
            type="text"
            id="username"
            placeholder='Username'
            autoComplete="off"
            value={username}
            className='nomad-input'
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            className='nomad-input'
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <input
            type="password"
            id="password_confirmation"
            placeholder='Password Confirmation'
            value={passwordConfirmation}
            className='nomad-input'
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />

          <div className="submit-btn">
            <button className='button is-black nomad-btn submit' type="submit">{isLoading ? "Loading..." : "SIGN UP"}</button>
          </div>

          <div className="error-message">
            <p>{errors.message}</p>
          </div>

        </form>
      </div>
    </Layout>
  )
}

export default SignUpForm
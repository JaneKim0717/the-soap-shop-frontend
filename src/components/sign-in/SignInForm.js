import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Layout from '../shared/Layout'
import './SignIn.styles.scss';

function SignInForm({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
        console.log("logged in");
        history.push('/')
      })
      } else {
        r.json().then((err) => setError(err.errors));
      }
    });
  }

  return (
    <Layout>
      <div className='form container'>
        <h1>L O G I N</h1>
        <form onSubmit={handleSubmit}>

          <input 
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            value={username}
            className='nomad-input'
            onChange={(e) => setUsername(e.target.value)}
          />

          <input 
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            className='nomad-input'
            onChange={(e) => setPassword(e.target.value)}
          />

        <div className="submit-btn">
          <button type='submit' className='button is-black nomad-btn submit'> 
            {isLoading ? "Loading..." : "LOGIN"}
          </button>
        </div>

        <div className="error-message">
          <p>{error.message}</p>
        </div>
        
        </form>
      </div>
    </Layout>
  )
}

export default SignInForm
import React, { useState } from 'react'
import SignInForm from './SignInForm';
import SignUpForm from '../sign-up/SignUpForm';
import { Link } from 'react-router-dom';
import './SignIn.styles.scss'

function SignIn({ onLogin }) {

  const [showLogin, setShowLogin] = useState(true);

  return(
    <>
      {showLogin ? 
        <>
          <SignInForm onLogin={onLogin} />
            <Link onClick={() => setShowLogin(false)}> Don't have an account? Sign Up </Link>
        </>
      : 
        <>
          <SignUpForm onLogin={onLogin} />
            <Link onClick={() => setShowLogin(true)}> Already have an account? Log In </Link>
        </>
      }
    </>
  )
}

export default SignIn
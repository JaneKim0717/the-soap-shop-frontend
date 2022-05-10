import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Layout from '../shared/Layout';


const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #f5f5f4;
    color:black;
    cursor: pointer;
    font-weight: 600;
    display: block;
    width: 300px;
    line-height: 1.4;
    padding-left: 5px;
    padding-right: 5px;
    white-space: normal;
    margin-top: 10px;
    margin-bottom: 5px;
    min-height: 44px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/5764081/pexels-photo-5764081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
`;


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
    localStorage.setItem('userId', user.id);
    console.log('check local storage')
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
      <Container>
        <Wrapper>

        {isSigningUp?

          <Form onSubmit={handleFormSubmit}>
          <Title>S I G N - U P</Title>
            <Input 
              type="text"
              name="email"
              placeholder='EMAIL'
              autoComplete="off"
              value={formData.email}
              onChange={handleFormChange}
            />

            <Input
              type="text"
              name="first_name"
              placeholder='FIRST NAME'
              autoComplete="off"
              value={formData.first_name}
              onChange={handleFormChange}
            />

            <Input
              type="text"
              name="last_name"
              placeholder='LAST NAME'
              autoComplete="off"
              value={formData.last_name}
              onChange={handleFormChange}
            />    

            <Input
              type="text"
              name="username"
              placeholder='USERNAME'
              autoComplete="off"
              value={formData.username}
              onChange={handleFormChange}
            />

            <Input
              type="password"
              name="password"
              placeholder='PASSWORD'
              value={formData.password}
              onChange={handleFormChange}
              autoComplete="current-password"
            />

            <Input
              type="password"
              name="password_confirmation"
              placeholder='PASSWORD CONFIRMATION'
              value={formData.password_confirmation}
              onChange={handleFormChange}
              autoComplete="current-password"
            />

              <Button type="submit">
                SIGN UP
              </Button>

              <Button type="submit" 
              onClick={handleSignUpStateChange}>
                Already have an account? Login
              </Button>
          </Form>

          : 

          <Form onSubmit={handleFormSubmit}>
            <Title>L O G I N</Title>

            <Input
              type="text"
              name="username"
              placeholder='USERNAME'
              autoComplete="off"
              value={formData.username}
              onChange={handleFormChange}
            />

            <Input
              type="password"
              name="password"
              placeholder='PASSWORD'
              value={formData.password}
              onChange={handleFormChange}
              autoComplete="current-password"
            />

              <Button>
                LOGIN
              </Button>

              <Button  
              onClick={handleSignUpStateChange}>
                Don't have an account? Sign up
              </Button>

          </Form>
          }

        </Wrapper>
      </Container>
    </Layout>
  )
}

export default SignUpForm
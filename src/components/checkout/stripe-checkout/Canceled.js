import React from 'react'
import { withRouter } from 'react-router-dom'
import Layout from '../../shared/Layout'
import styled from "styled-components";


const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #44403c;
    color:white;
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
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -300px
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const CanceledMessage = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

function Canceled({ history }) {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <div className='checkout'>
            <Title>UH OH!</Title>
            <CanceledMessage>Your payment was not successful.</CanceledMessage>
            <div>
              <Button onClick={() => history.push('/shop')}>
                CONTINUE SHOPPING
              </Button>
            </div>
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default withRouter(Canceled)
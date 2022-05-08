import React from 'react'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import './MainSection.styles.scss'



const OuterContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
  filter: brightness(80%);
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Header = styled.h1`
    color:black;
    letter-spacing: 2px;
    margin-top: 80px;
`;

const Paragraph = styled.div`
    color:white;
    font-size: large;
    margin-bottom: 20px;
    width: 500px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

function MainSection() {

  let history=useHistory()

  return (
    <>
    <Header>FEATURED PRODUCTS</Header>
      <OuterContainer>
      <Container>
        <Image src="https://i.imgur.com/VfUZs6D.png" />
        <Info>
          <Title>WHISKY GLASS SOY CANDLE</Title>
          <Paragraph>Our Whisky Glass Soy Candle is perfect for those who have fragrance sensitivities but love the ambiance of candles. Pure soy wax candles have a mild sweet scent to them when lit.</Paragraph>
          <Button onClick={() => history.push('/product/9')}>SHOP</Button>
        </Info>
      </Container>

      <Container>
        <Image src="https://i.imgur.com/qFAtY8D.png" />
        <Info>
          <Title>BUTTER BOMB</Title>
          <Paragraph>Hydrating & Nourishing Bath. Our Butter Bomb contains 2 grams of cocoa butter, adding extra hydration to your bath. Scented with relaxing lavender and ylang ylang essential oils.</Paragraph>
          <Button onClick={() => history.push('/product/11')}>SHOP</Button>
        </Info>
      </Container>

      <Container>
        <Image src="https://i.imgur.com/JcXQ1jq.jpg" />
        <Info>
          <Title>LAVENDER CALM BATH SALTS</Title>
          <Paragraph>This luxury Lavender Calm Bath Salts is infused with relaxing essential oils and nourishing minerals to calm your body and mind. All-natural, vegan and cruelty-free.</Paragraph>
          <Button onClick={() => history.push('/product/12')}>SHOP</Button>
        </Info>
      </Container>
    </OuterContainer>
  </>

  )
}

export default withRouter(MainSection);
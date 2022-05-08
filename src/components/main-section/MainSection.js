import React from 'react'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// import { mainCards } from '../../data'
// import aghaSoaps from '../../assets/making-soaps.jpg';
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
    color:black;
    margin-bottom: 20px;
`;

const Header = styled.h1`
    color:black;
    letter-spacing: 2px;
    margin-top: 80px;
`;

const Paragraph = styled.div`
    color:black;
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











    // <div className='main-section-container'>
    //   <div className='main-section-middle'>
    //     <div className='ms-m-image'>
    //       <img src={aghaSoaps} alt='bath bomb' />
    //     </div>
    //     <div className='ms-m-description'>
    //       <h1 className='welcome-main-section'>
    //         WELCOME TO THE SOAP SHOP
    //       </h1>

    //       <h3 className='welcome-titles'>  M I S S I O N  </h3>
    //       <p>
    //         Our products are handmade in small batches with natural and fresh ingredients. We strive to bring you joyful experiences and effective results by incorporating our products into your self-care routine.
    //       </p>

    //       <h3 className='welcome-titles'>  S I M P L E  </h3>
    //       <p>
    //           We believe that keeping our ingredients simple is the most effective way to reduce unwanted irritation from a product. We always choose safe, effective and high-quality ingredients suitable for each formula to bring you the best result.
    //       </p>

    //       <h3 className='welcome-titles'>  N A T U R A L  </h3>
    //       <p>
    //         We believe in the healing powers of natural botanicals. We always incorporate effective and high-quality natural ingredients into our products.
    //       </p>

    //       <h3 className='welcome-titles'>  E A R T H - C E N T E R E D  </h3>
    //       <p>
    //         We believe it's imperative to minimize our impact on the environment. We are committed to reducing plastic waste and protecting the Earth at every part of our business, from production and shipping to our end products.
    //       </p>

    //       <div className='ms-shop-all-bttn'>
    //         <button className='button is-black' id='shop-now' onClick={()=> history.push('/shop')} >
    //           SHOP ALL PRODUCTS
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default withRouter(MainSection);
import React from 'react'
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Wrapper = styled.div`
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 110px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 1rem;
  font-weight: normal;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ButtonsContainer = styled.div`
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 10px;
  margin-right: 5px;
  margin-top: 1.3rem;
`

const ButtonIncrease = styled.button`
  border: none;
  color: rgb(14, 14, 14);
  background-color: white;
  cursor: pointer;
`

const ButtonDecrease = styled.button`
  border: none;
  color: rgb(14, 14, 14);
  background-color: white;
  cursor: pointer;
`

const ButtonTrash = styled.button`
  border: none;
  color: rgb(14, 14, 14);
  background-color: white;
  cursor: pointer;
`




function CartItems(props) {

  const { name, image, price, quantity, id, description, increase, decrease, removeProduct } = props;
  const product = { name, image, price, quantity, id, description }


  return (

    <Wrapper>
      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src={image} />
              <Details>
                <ProductName>
                  {name}
                </ProductName>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductPrice>{`QUANTITY: ${quantity}`}</ProductPrice>
            </PriceDetail>
            <PriceDetail>
              <ProductPrice>${price}.00</ProductPrice>
            </PriceDetail>
            <ProductAmountContainer>
              <ButtonsContainer>
                <ButtonIncrease onClick={() => increase(product)}>
                  <AddIcon width='20px' />
                </ButtonIncrease>

                <ButtonDecrease onClick={() => decrease(product)} >
                  <RemoveIcon width='20px' />
                </ButtonDecrease>

                <ButtonTrash onClick={() => removeProduct(product)}>
                  <DeleteOutlineIcon width='20px' />
                </ButtonTrash>

              </ButtonsContainer>
            </ProductAmountContainer>
          </Product>
          <Hr />

        </Info>

      </Bottom>
    </Wrapper>









    // <>
    //   <div className="cart-item">
    //     <div className="item-image">
    //       <img src={image} alt='product'/>
    //     </div>
    //     <div className="name-price">
    //       <h4>{name}</h4>
    //       <p>${price}.00</p>
    //     </div>
    //     <div className="quantity">
    //       <p>{`QUANTITY: ${quantity}`}</p>
    //     </div>
    //     <div className="btns-container">
    //       <button className="btn-increase" onClick={() => increase(product)}>
    //         <AddIcon width='20px' />
    //       </button>

    //       <button className="btn-decrease" onClick={() => decrease(product)} >
    //         <RemoveIcon width='20px' />
    //       </button>

    //       <button className="btn-trash" onClick={() => removeProduct(product)}>
    //         <DeleteOutlineIcon width='20px' />
    //       </button>
    //     </div>
    //   </div>
    // </>
  )
}

export default CartItems
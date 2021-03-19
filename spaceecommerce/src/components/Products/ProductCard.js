import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 4%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background-color:white;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`


const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  background-color:black;
  color:white;
  border-radius:8px;
  padding:5px;
  &:hover{
   transform: scale(1.2);
}`;

const ImagesCard = styled.img`
  height:200px;
  width:200px;
  margin-top:1vh;
  background-color:white;
`

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <ImagesCard src={product.photo}/>
      <CardInfo>
        <p>{product.name}</p>
        <p>R${product.price},00</p>
        <AddToCartButton onClick={() => this.props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}

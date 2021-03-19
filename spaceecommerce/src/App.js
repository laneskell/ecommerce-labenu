import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 20fr 0.1fr;
  grid-template-columns: 1fr 3fr 1fr;
  background-image: linear-gradient(200deg, #8f8f8f, white);
  height:100vh;
`;
const Header = styled.div`
display:grid;
font-size:40px;
align-items:center;
justify-content:center;
height:100%;
color:white;
background-color:black;
grid-column:1 /-1;
`;
const Footer = styled.div`
display:grid;
grid-column:1 /-1;
background-color:black;
color:white;
justify-content:center;
`;



const ContainerProducts = styled.div`
  overflow:auto;
`;
const HeaderContainer = styled.div`
  background-color: #313131;


`;

const products = [
  {
    id:1,
    name: "Vinho Chileno Branco",
    description: "Vinho Chileno Branco Sauvignon Blanc Três Medallas SANTA RITA Garrafa 750ml - ",
    photo: "https://static.paodeacucar.com/img/uploads/1/720/11935720.png",
    price: 47,
  },
  {
    id:2,
    name: "Vinho Argentino Brancol ",
    description:"Vinho Argentino Branco FUZION Chardonnay Garrafa 750ml - Algumas notas de mel e frutas cítricas." , 
    photo: "https://static.paodeacucar.com/img/uploads/1/247/4103247.jpg",
    price: 79,
  },
  {
    id:3,
    name: "Vinho Chileno Tinto",
    description:"Vinho Chileno Tinto 120 SANTA RITA Dark Cellar Garrafa 750ml ",
    photo: "https://static.paodeacucar.com/img/uploads/1/605/619605.png",
    price: 89,
  },
  {
    id:4,
    name: "Vinho Barton Guestier",
    description:"Vinho Barton Guestier Chateau Magnol Haut-Medoc AOC 750ml - Notas de cereja preta, traços de café, noz-moscada e especiarias",
    photo: "https://static.paodeacucar.com/img/uploads/1/648/11697648.jpeg",
    price: 449,
  },
  {
    id:5,
    name: "Champagne G.H Mumm",
    description:"Champagne G.H Mumm Olympe Gold Demi Sec 750ml - Desenvolvido especialmente para beber com gelo. Seu blend é composto por Pinot Meunier (60%), Pinot Noir (30%) e Chardonnay (10%",
    photo: "https://static.paodeacucar.com/img/uploads/1/448/11436448.png",
    price: 529,
  },
  {
    id:6,
    name: "Espumante Nacional Nature",
    description:"Espumante Nacional Nature CASA PERINI 750ML ",
    photo: "https://static.paodeacucar.com/img/uploads/1/417/620417.jpg",
    price: 149,
  },
  {
    id:7,
    name: "Sidra Cereser Ice",
    description:"Sidra Cereser Ice Garrafa 660ml",
    photo: "https://static.paodeacucar.com/img/uploads/1/832/649832.png",
    price: 10,
  },
  {
    id:8,
    name: "Sidra Cereser Especial",
    description:"Sidra Cereser Edição Especial 660ml",
    photo: "https://static.paodeacucar.com/img/uploads/1/764/643764.jpg",
    price: 14,
  },
  {
    id:9,
    name: "Espumante Casa Perini",
    description:"Espumante Casa Perini ICE Rosé 750ml",
    photo: "https://static.paodeacucar.com/img/uploads/1/825/649825.png",
    price: 250,
  },
  {
    id:10,
    name: "Combo Vodka Nordka",
    description:"Combo Vodka Nordka 1L + Energético TNT Sabores 269ml",
    photo: "https://static.paodeacucar.com/img/uploads/1/394/9675394.jpeg",
    price: 30,
  },
  {
    id:11,
    name: "Vodka Belvedere",
    description:"Vodka Belvedere Black Raspberry 700ml   É produzida apenas com raspberry - um tipo de framboesa - mais frescas e saborosas, colhidas a mão na região de Podlasie, no norte da Polônia.",
    photo: "https://static.paodeacucar.com/img/uploads/1/197/11650197.png",
    price: 450,
  },
  {
    id:12,
    name: "Vodka Nacional Tiiv",
    description:"Vodka Nacional Tiiv 1 Litro - Produto Orgânico",
    photo: "https://static.paodeacucar.com/img/uploads/1/333/11524333.png",
    price: 82,
  },
  {
    id:13,
    name: "Gin Tanqueray",
    description:"Gin London Dry Tanqueray Garrafa 750ml",
    photo: "https://static.paodeacucar.com/img/uploads/1/723/11962723.jpeg",
    price: 97,
  },
  {
    id:14,
    name: "Gin Torquay",
    description:"Gin London Dry Torquay Garrafa 740ml",
    photo: "https://static.paodeacucar.com/img/uploads/1/874/11630874.png",
    price: 66,
  },
  {
    id:15,
    name: "Gin Bombay Sapphire",
    description:"O Gin Bombay Sapphire é verdadeiramente único!   Enquanto gins comuns fervem seus vegetais diretamente no tanque de destilação, para alcançar seu sabor, o Bombay Sapphire é criado através do processo de vapor de infusão. ",
    photo: "https://static.paodeacucar.com/img/uploads/1/697/9773697.png",
    price: 139,
  },
  {
    id:16,
    name: "Gin The Botanist",
    description:"VO Gin The Botanist Scotch Dry é único no mundo, pois combina 31 ervas para sua criação, 22 delas exclusivas para sua composição, colhidas à mão, revelando a grande diversidade botânica da ilha de Islay. E o único gin feito na ilha, realmente uma relíquia!",
    photo: "https://static.paodeacucar.com/img/uploads/1/97/11696097.jpeg",
    price: 582,
  },

];

class App extends React.Component {
  state = {
    minFilter: 0,
    maxFilter: 0,
    nameFilter: '',
    productsInCart: [
      
    ]
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
          return (
      
      <AppContainer>
        <Header> DRINK STORE</Header>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <ContainerProducts>
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        </ContainerProducts>
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
        <Footer>
          Proibida a venda de bebidas alcóolicas para menores de 18  
        </Footer>
      </AppContainer>
    );
  }
}

export default App;

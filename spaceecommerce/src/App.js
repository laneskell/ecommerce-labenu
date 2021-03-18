import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows:3fr, 20fr;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  background-image: linear-gradient(200deg, #c9d0d1, white);

`;
const HeaderContainer = styled.div`
background-color: #313131;


`;

// const MainProducts = styled.div`
//   display: grid;
//   grid-template-rows:1fr, 6fr,1fr;
//   width: 100vw;
//   background-color:#313131;
//   /* background-image: url(https://static.videezy.com/system/resources/thumbnails/000/000/116/original/Stars.jpg) ; */
//   background-size: cover;
// `;
// const HeaderStore = styled.div`

// font-size:1.8em;
// color: white;
// background-color:black;
// `;
// const InputSearch = styled.input`
// display:flex;
// flex-direction:column;
// height:2vh;
// width:5vw;
// `;


const products = [
  {
    id:1,
    name: "Camiseta Nasa",
    photo: "https://img.elo7.com.br/product/zoom/2255380/camiseta-camisa-nasa-exploracao-espacial-liga.jpg",
    price: 50,
  },
  {
    id:2,
    name: "Base Espacial ",
    photo: "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=750121886",
    price: 569,
  },
  {
    id:3,
    name: "Medalha Apollo 11",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbp0wtO01uw7oAEygtEG3_tRu3q5jS73X1A&usqp=CAU",
    price: 250,
  },
  {
    id:4,
    name: "Produto 4",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbp0wtO01uw7oAEygtEG3_tRu3q5jS73X1A&usqp=CAU",
    price: 30,
  },
  {
    id:5,
    name: "Produto 5",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbp0wtO01uw7oAEygtEG3_tRu3q5jS73X1A&usqp=CAU",
    price: 80,
  },
  {
    id:6,
    name: "Produto 6",
    photo: "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=750121886",
    price: 500,
  },
  {
    id:7,
    name: "Produto 7",
    photo: "https://picsum.photos/200/200?random=7",
    price: 50,
  },
  {
    id:8,
    name: "Produto 8",
    photo: "https://picsum.photos/200/200?random=8",
    price: 150,
  },
  {
    id:9,
    name: "Produto 9",
    photo: "https://picsum.photos/200/200?random=9",
    price: 250,
  },
  {
    id:10,
    name: "Produto 10",
    photo: "https://picsum.photos/200/200?random=10",
    price: 30,
  },
  {
    id:11,
    name: "Produto 11",
    photo: "https://picsum.photos/200/200?random=11",
    price: 500,
  },
  {
    id:12,
    name: "Produto 12",
    photo: "https://picsum.photos/200/200?random=12",
    price: 500,
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
        
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </AppContainer>
    );
  }
}

export default App;

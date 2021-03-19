import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  background-color:#111211;
  color:white;
 
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;
const InputSearch = styled.input`
  width:30%;
`;
const SearchByCategory = styled.select`
  background-color:grey;
  padding: 10px;
  width:80%;
  margin-top:7px;
  font-size:0.9rem;
  text-transform:uppercase;
 

  
`;

export class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <h3>Buscar Produtos</h3>
        <InputContainer>
          Valor mínimo:
          <InputSearch
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <InputSearch
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          /> 
        </InputContainer>
        <br/>
        <h3>Buscar Por Categoria</h3>
        <SearchByCategory name="categoria" id="categoria" value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}>
          <option value="">TODAS</option>
          <option value="Espumante">ESPUMANTES</option>
          <option value="Gin">GIN</option>
          <option value="Vinho">VINHOS</option>
          <option value="Vodka">VODKAS</option>
        </SearchByCategory>
         

    </FiltersContainer>
  }
}
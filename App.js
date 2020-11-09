
import React, {useState} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Pagina = styled.View`
  flex: 1;
`
const Cabecalho = styled.View`
  height: 60px;
  background-color: #1827AC;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Busca = styled.TextInput`
  color: #fff;
  font-size: 20px;
`

const App = () => {

  const [nome, alteraNome] = useState('');

  return (
      <Pagina>
      <Cabecalho>
        <Busca
          placeholder="Dig o nome do filme...."
          value={nome}
          placeholderTextColor="#ccc"
          onChangeText={(filme) => alteraNome(filme)}
        />
      </Cabecalho>
      </Pagina>
  );
}
export default App;
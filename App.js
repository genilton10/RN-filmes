
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';

const Pagina = styled.View`
  flex: 1;
  margin-top: 20px;
`
const Cabecalho = styled.View`
  height: 60px;
  background-color: #1827AC;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`
const Busca = styled.TextInput`
  color: #fff;
  font-size: 20px;
`
const Botao = styled.TouchableOpacity``;

const Iconebuscar = styled.Image`
  width: 30px;
  height: 30px;
`
const Centro = styled.View`
align-items: center;
padding-top: 30px;
`;

const Imagem = styled.Image`
  width: 80%;
  height: 80%;
  border-radius: 10px;
`;

const App = () => {

  const [nome, alteraNome] = useState('');
  const [filme, alteraFilme] = useState({});

  const buscarFilme = async () =>{
    const requisicao = await fetch(`http://www.omdbapi.com/?apikey=8159cc5a&t= ${nome}`, );
    const resultado = await requisicao.json();
    console.log(resultado);
    alteraFilme(resultado);
  }

  return (
      <Pagina>
      <Cabecalho>
        <Busca
          placeholder="Dig o nome do filme...."
          value={nome}
          placeholderTextColor="#ccc"
          onChangeText={(titulo) => alteraNome(titulo)}
        />
      <Botao activeOpacity ={0.3} onPress={buscarFilme}>
        <Iconebuscar source={require('./src/imagens/img01.png')}/>
      </Botao>
      </Cabecalho>
      <Centro>
        <Imagem source = {{uri:filme.Poster}}/>
      </Centro>
      </Pagina>
  );
}
export default App;
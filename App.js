
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
const Centro = styled.View``;

const Imagem = styled.Image`
  width: 80%;
  height: 80%;
  border-radius: 10px;
`;


const App = () => {

  const [nome, alteraNome] = useState('');
  const [filme, alteraFilme] = useState({"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy, Mystery","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"UK, USA","Awards":"Nominated for 3 Oscars. Another 46 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"85/100"}],"Metascore":"85","imdbRating":"8.1","imdbVotes":"747,169","imdbID":"tt1201607","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Heyday Films, Moving Picture Company, Warner Bros.","Website":"N/A","Response":"True"});

  return (
      <Pagina>
      <Cabecalho>
        <Busca
          placeholder="Dig o nome do filme...."
          value={nome}
          placeholderTextColor="#ccc"
          onChangeText={(titulo) => alteraNome(titulo)}
        />
      <Botao>
        <Iconebuscar source={require('./src/imagens/img01.png')}/>
      </Botao>
      </Cabecalho>
      <View>
        <Imagem source = {{uri:filme.Poster}}/>
      </View>
      </Pagina>
  );
}
export default App;
//importaçoes
import React from 'react';
import {Text,AppRegistry, View, Image,TouchableOpacity, Alert} from 'react-native';


//Formataçoes
const Estilos = {
  principal:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'   
  },
  botao:{
  	backgroundColor: '#538530',
  	paddingVertical: 10,
  	paddingHorizontal: 40,
  	marginTop: 20

  },
  textBotao:{
  	color: 'white',
  	fontSize: 16,
  	fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
 	
 	var numeroAleatorio = Math.random();
 	numeroAleatorio = Math.floor(numeroAleatorio * 5);

 	//frases
 	var frases = Array();
 	frases[0] = 'Estou sempre Alegre. Essa é a melhor maneira';
 	frases[1] = 'O tempo dura bastante para aqueles que sabem usar';
 	frases[2] = 'Se você encontra um caminho sem obstáculo';
 	frases[3] = 'Não existe um caminho para a felicidade sem o sacrifício';
 	frases[4] = 'Você nunca sabe a força que tem ';

 	var fraseEscolhida = frases[numeroAleatorio];

 	Alert.alert(fraseEscolhida);

}

//Criar o componente
const App = () => {

  const { principal, botao, textBotao } = Estilos;

  return(

    <View style={principal }>


      <Image source={require('./imgs/logo.png')}/>


      <TouchableOpacity 
      	onPress={gerarNovaFrase}
      	style={botao}>
      	<Text style={textBotao}>Nova Frase</Text>
      </TouchableOpacity>

    </View>
    );
};
//Renderizar para o dispositivo
export default App;
AppRegistry.registerComponent('app2', ()=> App);


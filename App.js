//importaçoes
import React,{ Component }  from 'react';
import {Text, View, AppRegistry, StyleSheet, Button} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';


export default class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado: ''};
  }

  jokenpo(escolhaUsuario) {
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch ( numAleatorio) {
      case 0: escolhaComputador = 'Pedra' ; break;
      case 1: escolhaComputador = 'Papel' ; break;
      case 2: escolhaComputador = 'Tesoura' ; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if (escolhaComputador === 'Pedra') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'Papel') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'Papel') {
      if (escolhaUsuario === 'Papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'Pedra') {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'Tesoura') {
      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'Pedra') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'Papel') {
        resultado = 'Você perdeu';
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>

        <Topo />

        <View style={styles.painelAcoes }>

          <View style={styles.btnEscolha}>
            <Button title='Pedra' onPress={() => {this.jokenpo('Pedra'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='Papel' onPress={() => {this.jokenpo('Papel'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='Tesoura' onPress={() => {this.jokenpo('Tesoura'); }} />
          </View>

        </View>

        <View style={ styles.palco }>
          <Text style={ styles.txtResultado }>{ this.state.resultado }</Text>

          <Icone escolha={ this.state.escolhaComputador} jogador='Computador' />
          
          <Icone escolha={ this.state.escolhaUsuario} jogador='Você' />
                    
        </View>
        
      </View>
      );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90  
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  palco: {
    alignItems: 'center',
    marginTop: 15
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
    marginTop: 10 
  }

});

//Renderizar para o deispositivo
AppRegistry.registerComponent('app3', () => app3);


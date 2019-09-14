//importaçoes
import React,{Component}  from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const imgPedra = require('../../img/pedra.png');
const imgPapel = require('../../img/papel.png');
const imgTesoura = require('../../img/tesoura.png');

export default class Icone extends Component {
	render() {

		if (this.props.escolha === 'Pedra') {
			return(
				<View style={ styles.icone }>
					<Text style={ styles.txtJogador }>{ this.props.jogador }</Text>
					<Image source={imgPedra} />
				</View>
				);
		} else if (this.props.escolha === 'Papel') {
			return(
				<View style={ styles.icone }>
					<Text style={ styles.txtJogador }>{ this.props.jogador }</Text>
					<Image source={imgPapel} />
				</View>
				);
		} else if (this.props.escolha === 'Tesoura') {
			return(
				<View style={ styles.icone }>
					<Text style={ styles.txtJogador }>{ this.props.jogador }</Text>
					<Image source={imgTesoura} />
				</View>
				);

		}

		return false;
	}
}

const styles = StyleSheet.create({
	icone: {
		alignItems: 'center',
		marginTop: 20
	},
	txtJogador:{
		fontSize: 18
	}
});
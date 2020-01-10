import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Imagem from './assets/react-logo.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            texto: ''
        };
      }
      
    clickHandler = () => {
        const names = ['William', 'Amanda', 'Melissa', 'Nick', 'Maria', 'Murilo'];
        let index = Math.floor(Math.random() * names.length);
        
        this.setState({name: names[index]});
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Imagem} style={{ width: '40%', height: '30%' }} />

                <Text style={styles.textHello}>{this.state.name}</Text>

                {/* <View style={{ width: '65%', marginVertical: 15, justifyContent: 'center' }}>
                    <Button title='CLICK ME' onPress={this.clickHandler} />
                </View> */}

                <TouchableOpacity activeOpacity={.85} onPress={this.clickHandler} style={styles.btnPersonalizado}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>CLIQUE AQUI</Text>
                </TouchableOpacity>
                
                <Text style={styles.textReact}>{this.state.texto}</Text>
                <TextInput placeholder='Digite seu nome...' onChangeText={texto => this.setState({texto})} style={{ fontSize: 20 }} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textReact: {
        fontSize: 45,
        color: '#004ba0',
        fontWeight: 'bold'
    },
    textHello: {
        fontSize: 35
    },
    btnPersonalizado: {
        width: '65%',
        height: '8%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#263238'
    }
});

export default App;


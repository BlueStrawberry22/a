import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableHighlight, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const[valor1, setValor1]=useState("");
  const[valor2, setValor2]=useState("");
  const[resultado, setResultado]=useState("");

  const soma=()=>{
    setResultado(parseFloat(valor1)+parseFloat(valor2))
  }
  return (

    <View style={styles.container}>
      <Text style={styles.texto}>
        CALCULADORA
      </Text>
      <TextInput
        style={styles.input}
        value={String(valor1)}
        onChangeText={(texto)=>setValor1(texto)}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={String(valor2)}
        onChangeText={(texto)=>setValor2(texto)}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={String(resultado)}
        onChangeText={(texto)=>resultado(texto)}
      ></TextInput>
      <View style={styles.container2}>
      <TouchableHighligh
        style={styles.btn} 
        onPress={()=>soma()}
      >
        <Text>Somar</Text>
      </TouchableHighligh>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{
    fontSize:20,
    padding:20,
    alignItems:'center',
    marginLeft:50,
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: '000000',
    color:'#FFFFF'
  },
  input:{
    margin:50,
    alignItems: 'center',
    textAlign: 'center',
    height: 50,
    borderWidth: 1,
    fontSize: 20,
    backgroundColor: '#59D9D9'
  }

})
;

import { useState } from 'react';
import { StyleSheet, View,TextInput,SafeAreaView, FlatList, TouchableOpacity,Text } from 'react-native';

import Pessoa from './listas';

export default function App() {

  const [nome, setNome] = useState('');
  const [lista, setLista] = useState([]);

  function adicionar() {
    const novoItem = { nome };
    setLista([ ...lista, novoItem]);
  }

  function removerItem(index) {
    const novaLista = [...lista];
    novaLista.splice(index,1);
    setLista(novaLista);
  }
  
 
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <TextInput
      style={styles.input}
      placeholder="Digite uma tarefa"
      onChangeText={(text) => setNome(text)}
      value={nome}
      
    
      />
      <TouchableOpacity onPress={adicionar}><Text style={styles.button}>+</Text></TouchableOpacity>
      <TouchableOpacity onPress={removerItem}><Text style={styles.button}>-</Text></TouchableOpacity>
      
      </View>
      
      <FlatList
      data={lista}
      renderItem={({ item }) => <Pessoa data={item} />}
     
      
    />

      
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
   
  },
  input:{
    height:40,
   
    borderWidth:3,
    margin:10,
    padding:10,
    fontSize:20
  },
  texto:{
    fontSize:10,
    justifyContent:'center'
  },
  button: {
    fontSize: 20,
    color: 'blue',
    margin: 10,
  },
});






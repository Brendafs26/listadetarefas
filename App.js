import { useState } from 'react';
import { StyleSheet, View,TextInput,SafeAreaView, FlatList, TouchableOpacity,Text } from 'react-native';

import Pessoa from './listas';

export default function App() {

  const [nome, setNome] = useState('');
  const [lista, setLista] = useState([]);
  const [novoTexto, setNovoTexto] = useState('');

  function adicionar() {
    const novoItem = { nome };
    setLista([ ...lista, novoItem]);
  }

  function removerItem(index) {
    const novaLista = [...lista];
    novaLista.splice(index,1);
    setLista(novaLista);
  }

  function editarItem() {
    
    const novaLista = [...lista];
    novaLista.splice(0,1,novalista=[lista]);
    setLista(novaLista);
  }
  
 
  return (
    <SafeAreaView style={styles.container}>
      <View>


      <Text style={styles.texto}>Lista de Tarefa</Text>
      <TextInput
      style={styles.input}
      placeholder="Digite uma tarefa"
      onChangeText={(text) => setNome(text)}
      value={nome}
      
      />


      <TouchableOpacity onPress={adicionar}><Text style={styles.button}>+</Text></TouchableOpacity>
      <TouchableOpacity onPress={removerItem}><Text style={styles.button}>-</Text></TouchableOpacity>
      <TouchableOpacity onPress={editarItem}><Text style={styles.button}>0</Text></TouchableOpacity>

     
    

   
      
  
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
    justifyContent: 'center',
    alignItems: 'center',
 
   
  },
  input:{
    height:30,
    width:380,
    borderWidth:2,
    margin:10,
    padding:15,
    fontSize:10,
    color:'black'
  },
  texto:{
    fontSize:30,
    textAlign: 'center',
    marginBottom:30,


  },
  button: {
    fontSize: 20,
    color: 'blue',
    margin: 10,
  },
});






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
  
  
  function  removerItem(index) {
      const novaLista = [...lista];
      novaLista.slice(index);
      setLista(novaLista);
    }
  
    function editarItem() {
      
      const novaLista = [...lista];
      novaLista.splice(0,1,{nome});
      setLista(novaLista);
    }
    
 
  return (
    <SafeAreaView style={styles.container}>
      


      <Text style={styles.texto}>Lista de Tarefa</Text>
      <View style={styles.principal}>
      <TextInput
      style={styles.input}
      placeholder="Digite uma tarefa"
      onChangeText={(text) => setNome(text)}
      value={nome}
      
      />
<View style={styles.botao}>
<TouchableOpacity onPress={adicionar}><Text style={styles.button}>+</Text></TouchableOpacity>
</View>
</View>
     
      

     
    

   
      
  
      
      
      <FlatList
      data={lista}
      renderItem={({ item }) => (<Pessoa data={item} onPress={()=>removerItem(item)}  />)
    }
     
      
    />

      
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor:'blue',
   justifyContent:"center",
    alignItems: 'center',
  },
  principal:{
    flexDirection:'row',
    marginBottom:30,
   
    
    
  },
  input:{
    height:60,
    width:380,
    borderWidth:10,
    fontSize:20,
    color:"black",
   
    backgroundColor:"white",
    margin:0,
    padding:5,
  },
  texto:{
    fontSize:30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:"center",
    marginVertical:40,
    color:"white",
    
    
    


  },
  button: {
    fontSize: 20,
    color: 'white',
    padding:10,

   
  },
  botao:{
    borderWidth:5,
    backgroundColor:'gray',
  
  }

});






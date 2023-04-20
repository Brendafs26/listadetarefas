import React from 'react';
import{Text,StyleSheet,View,TextInput} from 'react-native';



import App from './App';




function Pessoa({data}){
    return(
        <View style={styles.areaPessoa}>
         <Text style={styles.textoPessoa}>{data.nome}
       </Text>

     
      

    
      
        </View>

        
    );
}

const styles = StyleSheet.create({
    areaPessoa:{
       
        backgroundColor:'red',
        width:400,
        height:30,
        marginBottom:20,
        
        
    },
    textoPessoa:{
        fontSize:15,
        color:'black',
        textAlign:'center',

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
})

export default Pessoa;
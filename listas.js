import React  from 'react';
import{Text,StyleSheet,View,TouchableOpacity} from 'react-native';

import App from './App';

function Pessoa({data}){
    return(
        <View style={styles.areaPessoa}>
         <Text style={styles.textoPessoa}> {data.nome} </Text>
         <View style={styles.botaoes}>
         <TouchableOpacity onPress={data.onPress}><Text style={styles.botao}>-</Text></TouchableOpacity>
         <TouchableOpacity  onPress={data.onPress}><Text style={styles.botao}>+</Text></TouchableOpacity>
        
        </View>
      
        </View>

        
    );
}

const styles = StyleSheet.create({
    areaPessoa:{
    
        backgroundColor:'white',
        width:400,
        height:60,
        marginBottom:20,
        
        
    },
    textoPessoa:{
        fontSize:15,
        color:'blue',
      
         paddingTop:15

    },
    botaoes:{
         flexDirection:"row",
         alignSelf:'flex-end',
         paddingRight:10,
        paddingBottom:15,
         
    },
      botao: {
        fontSize: 30,
        color: "red",
        
        alignSelf:"flex-end",
        
        paddingRight:10,
        paddingBottom:15,
        marginTop:-25
        
      },

      
     
})

export default Pessoa;
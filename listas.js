import React from 'react';
import{Text,StyleSheet,View} from 'react-native';




function Pessoa({data}){
    return(
        <View style={styles.areaPessoa}>
         <Text style={styles.textoPessoa}>{data.nome}
      V </Text>

      

    
      
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

    }
})

export default Pessoa;
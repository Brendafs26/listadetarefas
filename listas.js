import React from 'react';
import{Text,StyleSheet,View} from 'react-native';




function Pessoa({data}){
    return(
        <View style={styles.areaPessoa}>
         <Text style={styles.textoPessoa}>{data.nome}</Text>

    
      
        </View>

        
    );
}

const styles = StyleSheet.create({
    areaPessoa:{
        flex:1,
    },
    textoPessoa:{
        fontSize:15,
        color:'black'

    }
})

export default Pessoa;
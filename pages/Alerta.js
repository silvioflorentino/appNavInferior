import * as React from 'react';
import{Text,View,StyleSheet} from 'react-native';

export default function Alerta(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> 

      Alerta de informações

      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent:'center',
     backgroundColor: '#b8a9f3',
     padding: 10,
   },
titulo:{
  margin: 20,
  fontSize: 20,
  textAlign:'center'
}

});

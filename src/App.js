import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native'; 

export default ()=>{
  return(
    <App value="4"/> 
  )
}

function App(props) {
  let [value, setValue] = useState(props.value)
  return (
    <>
      <View style={styles.b1}>
        <Text style={styles.txt}>Número Inicial: {props.value}!</Text>  
      </View>
    
      <View style={styles.b2}>
        <Text style={styles.txt}>Número: {value}!</Text>        
        <Button title = "Calcular" onPress = {()=>setValue(value*2)} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  b1: {
    flex: 1,
    backgroundColor: '#fab1a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  b2: {
    flex: 1,
    backgroundColor: '#0984e3',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  txt: {
    fontSize: 20,
  },
});

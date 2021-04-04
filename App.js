import React from 'react';
import { StyleSheet, Text, View  , TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class  App extends react.Component {
constructor(){
  super();
  this.state = {
    word:' '
  }
}
 
render() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <Header 
      centerComponent={{ 
         text:"Monkey-chunkey" , style:{ color : '#000' , fontSize:20 }
        }}
      backgroundColor={'#808080'}
      />

      <TextInput      style={styles.input}  
      placeholder="enter the chunkey"
      onChangeText={ Text  => {
this.setState({
  word:Text,
})
      }}
      value={
        this.state.word
      }
      />
        </SafeAreaView>
    </View>
    
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
});

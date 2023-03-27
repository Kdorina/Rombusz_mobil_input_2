import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './Button';

export default function App() {
  const[side, setSide] = useState('');
  const[alpha, setAlpha] = useState('');
  const[result, setResult] = useState('');

  function Calc(){
    let result =( 1/2)*side*Math.sin(alpha);
    setResult(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Rombuszba írható kör sugara</Text>

        <View style={styles.content}>
          <View style={styles.bg}>
            <Text style={styles.contentTitle}>A oldal</Text>
            <TextInput style={styles.input} onChangeText={(data) => setSide(data)}></TextInput>

            <Text style={styles.contentTitle}>Alfa szög</Text>
            <TextInput style={styles.input}  onChangeText={(data) => setAlpha(data)}></TextInput>

            {/* <TouchableHighlight style={styles.button} onPress={Calc}>
            <Text style={styles.titleBtn}>Számít</Text>
            </TouchableHighlight> */}
            <Button onPress={Calc}/>

            <TextInput style={styles.result} value={result}  onChangeText={(data) => setResult(data)} 
            editable={false} selectTextOnFocus={false}
            ></TextInput>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7D8FB',
    alignItems: 'center',
  },
  content:{
    flex: 1,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-300,
  },
  bg:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#9FC4EC',
    padding:20,
    borderRadius:10
  },
  title: {
    marginTop:100,
    fontSize:25,
    fontWeight:500,
    color:"#19324D",
    backgroundColor:"#ffff",
    padding:10,
    borderRadius:25
  },
  contentTitle:{
    fontSize:15
  },
  input:{
    backgroundColor:'white',
    margin:10,
    padding:10,
    borderRadius:10,
    width:250,
  },
  // titleBtn:{
  //   fontWeight:500
  // },
  // button:{
  //   backgroundColor:'#3274B9',
  //   padding:10,
  //   borderRadius:10,
  //   width:200,
  //   textAlign:'center',
  //   margin:10
  // },
  result:{
    backgroundColor:'#B7D8FB',
    margin:10,
    padding:10,
    borderRadius:10,
    width:250,
    borderColor:"#ffff",
    borderWidth:2
  },
});

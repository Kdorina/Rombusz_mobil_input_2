import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const Button = (props) => {
  return (
    <TouchableHighlight  style={styles.button}  onPress={props.onPress}>
    <Text style={styles.titleBtn}>Számít</Text>
    </TouchableHighlight>
  )
}

export default Button
const styles = StyleSheet.create({
    button:{
        backgroundColor:'#3274B9',
        padding:10,
        borderRadius:10,
        width:200,
        textAlign:'center',
        margin:10
      },
      titleBtn:{
        fontWeight:600,
        color:"white"
      },
});
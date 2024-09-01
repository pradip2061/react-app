import { View, Text, Image } from 'react-native'
import React from 'react'
const img = require('../images/obj.png')
function Object1() {
  return (
    <View>
        <Text style={{fontSize:30,color:'black',marginLeft:10}}>Definations:</Text>
      <Text style={{fontSize:22,marginLeft:10}}>---- Object has key and value.</Text>
      <Text style={{fontSize:22,marginLeft:7}}>--- object is create, access,assigning by following this:</Text>
    <Text style={{fontSize:30,marginTop:30,color:"black"}}> Examples:</Text>
    <Image source={img} style={{width:380,height:350,objectFit:'contain',marginLeft:10}}/>
    </View>  
  )
}
export default Object1
import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
const img = require('../images/oper1.png')
const img1 = require('../images/oper.png')
function Operator() {
  return (
    <ScrollView>
    <View>
        <Text style={{fontSize:30,color:'black',marginLeft:10}}>Definations:</Text>
      <Text style={{fontSize:22,marginLeft:10}}>---- Operators  symbols which are used for mathematical task .</Text>
      <Text style={{fontSize:22,marginLeft:10}}>---  here, values are called operands</Text>
      <Text style={{fontSize:22,marginLeft:12}}>---  there are many types of operators they are:</Text>
      <Text style={{fontSize:22,marginLeft:16}}>1. Arithmetic operators</Text>
      <Text style={{fontSize:22,marginLeft:16}}>2. Assignment operators</Text>
      <Text style={{fontSize:22,marginLeft:16}}>3. Compare operators</Text>
      <Text style={{fontSize:22,marginLeft:16}}>4. Logical operators</Text>
    <Text style={{fontSize:30,marginTop:30,color:"black"}}> Examples:</Text>
<Image source={img} style={{marginTop:30}}/>
<Image source={img1} style={{objectFit:'contain',width:380,height:400}}/>
    </View>  
    </ScrollView>
  )
}
export default Operator
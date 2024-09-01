import { Image, ScrollView, Text, View, } from 'react-native'
import React from 'react'
const img = require('../images/data.png')
function DataType  () {
    return (
      <ScrollView>
      <View style={{marginTop:10,
        padding:15
      }}>
        <Text style={{fontSize:28,color:'black'}}>Defination:</Text>
        <Text style={{fontSize:23,marginTop:10}}>
        --- Datatype the nature of value that store by variable.
        </Text>
      <Text style={{fontSize:23,marginTop:10}}>  --- there are 7 primitive types data type they are: </Text>
       <Text style={{fontSize:23,marginTop:10}}>1.Null </Text>
        <Text style={{fontSize:23,marginTop:10}}>2.number</Text>
        <Text style={{fontSize:23,marginTop:10}}>3.Boolean </Text>
         <Text style={{fontSize:23,marginTop:10}}>4.BigInt </Text>
       <Text style={{fontSize:23,marginTop:10}}>5.Symbol</Text>
        <Text style={{fontSize:23,marginTop:10}}>6.String</Text>
        <Text style={{fontSize:23,marginTop:10}}> 
          --- By using typeof we can know the type of value
        </Text>
        <Text style={{fontSize:28,color:'black',marginTop:30}}>
          Examples:
        </Text>
    <Image source={img}/>

      </View>
      </ScrollView>
    )
}
export default DataType

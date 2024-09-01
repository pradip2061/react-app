import { View, Text,Image, } from 'react-native'
import React, { useEffect } from 'react'
const img = require('../images/fill.png')
import * as Animatable from 'react-native-animatable';
function Splash({navigation}: {navigation: any}) {
   useEffect(()=>{
setTimeout(()=>{
navigation.navigate('LEARNGAIN')
},2000)
  },[])
  return (
    <Animatable.View style={{alignItems:'center',justifyContent:'center',marginTop:280,}} animation={'flipInY'}>
              <Image source={img} style={{width:200,height:150,objectFit:'contain'}} />
              <View style={{flexDirection:'row'}}>
              <Text style={{textAlign:'center',fontSize:25,marginLeft:10,color:'#FF5733'}}>LEARN</Text>
      <Text style={{textAlign:'center',fontSize:25,marginLeft:10,color:'black'}}>GAIN</Text>
      </View>
    </ Animatable.View>
  )
}
export default Splash
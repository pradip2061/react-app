import { View, TextInput,StyleSheet,Button, Image, Alert,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
const img = require('../images/profile.png')
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function Submit({navigation}:{navigation:any}) {
  const [pid,setPid]=useState('');
  const [email,setEmail]=useState('');
  const[loader,setLoader]=useState(false)
  function redirect(){
let mail = email;
let id = pid;

if(mail=='ADMIN@gmail.com'&& id == '2061'){
  setLoader(true);
  setTimeout(()=>{
    setLoader(false)
    navigation.navigate('Javascript basic to advance:')
  },2000)
}else{
  Alert.alert('data is invalid');
}
  }
  return (
    <>
    <Image source={img} style={{width:150,height:150,marginLeft:120,marginTop:30}}></Image>
    <View style={{alignItems:'center',marginTop:30,gap:30}}>
      <View style={{flexDirection:'row'}}>
        <FontAwesome name='user' style={{fontSize:40,color:'#FF5733'}}/>
      <TextInput style={style.styles} placeholder='enter your PID' value={pid} onChangeText={(props)=>setPid(props)}></TextInput>
      </View>
      <View style={{flexDirection:'row',gap:4,marginRight:10}}>
      <Ionicons name='mail' style={{fontSize:40,color:'#FF5733'}}/>
      <TextInput style={{borderWidth:1,
         width:300,
         borderColor:'black'}} placeholder='Enter the EMail' value={email} onChangeText={(props)=>setEmail(props)}></TextInput>
         </View>
         <View  style={{width:305,marginLeft:30}}>
         <Button title='Submit' color={'#FF5733'} onPress={redirect}></Button>
         </View>
         <ActivityIndicator size='large'  animating={loader}  color={'#FF5733'}/>
     </View>
     </>
  )
}
const style = StyleSheet.create({
  styles:{
    width:300,
    borderWidth:1,
       marginLeft:7,
       borderColor:'black'
 }
})
import { Text, View,TextInput,Button,StyleSheet,Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
const img = require('../images/fill.png')
import { LogBox, } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

function Signup ({navigation}: {navigation: any}) {
  function show(){
   setIcon(true);
  }
  function hide(){
    setIcon(false);
  }
  function valid(){
let data =email;
let hide = pass;
    if(data=='ADMIN@gmail.com' && hide=='admin123'){
      setLoader(true);
      setTimeout(()=>{
        setLoader(false);
        navigation.navigate('Javascript basic to advance:')
      },2000)
    }else{
         Alert.alert('data is invalid')
      }
  }
  const [icon,setIcon]=useState(false);
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [loader,setLoader]=useState(false);
  const navigation1= useNavigation();
    return (
      <>
      <Image  source={img} style={{width:200,height:200,marginLeft:100,}}/>
        <View style={{marginTop:20,flex:1,gap:30}}>
          <View style={{display:'flex',flexDirection:"row",marginLeft:20,alignItems:'center'}}>
          <MaterialIcons name='mail-outline' style={{fontSize:40,color:'#FF5733'}}/>
        <TextInput style={style.styles} placeholder='Enter the email' value={email} onChangeText={(props)=>setEmail(props)} ></TextInput>
        </View>
        <View style={{display:'flex',flexDirection:"row",marginLeft:28,alignItems:'center'}}>
          < FontAwesome name='lock' style={{fontSize:45,color:'#FF5733',}} />
     <TextInput style={{borderWidth:1,
         width:300,
         marginLeft:10,
         borderColor:'black'}} placeholder='Enter the password' secureTextEntry={true}  value={pass} onChangeText={(props)=>setPass(props)}></TextInput>
     </View>
     <View style={{width:305,marginLeft:64}}>
        <Button title='login' onPress={valid} color={'#FF5733'}></Button>
        </View>
        <ActivityIndicator size='large'  animating={loader}  color={'#FF5733'}/>
        <View style={{width:100,marginLeft:65,marginTop:100,flexDirection:'row',alignItems:'center',gap:10}}>
          <Button title='CONTACT' color={'#F374AD'} onPress={show}></Button>
          <View>
            {
            icon ?<View style={{flexDirection:'row',gap:40,}}>                                                                                
            < FontAwesome name='arrow-circle-left' style={{fontSize:45,color:'#FF5733',}}  onPress={hide} />  
            <View style={{flexDirection:'row',gap:40}}>
            < FontAwesome name='instagram' style={{fontSize:45,color:'red',}} />
            < FontAwesome name='facebook-square' style={{fontSize:45,color:'#4267B2',}} /></View></View>:null
            }
          </View> 
        </View>
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
export default Signup
//headerShown:false ===== important for hide the title
//useEffect(()=>{
  //const  unback = navigation1.addListener('beforeRemove',(e)=>{
    //e.preventDefault();});
    //return unback;
     // });
import {Text,ScrollView, View,StyleSheet,Button, Modal, Alert} from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
function Main({navigation}:{navigation:any}){
 const [modal,setModal]=useState(false);
 function modals(){
    setModal(true);}
    function navigate(){
        setModal(false);
        navigation.navigate('LEARNGAIN')
    }
    return (<>
    <View style={{flexDirection:'row',width:400,height:60,backgroundColor:"white",alignItems:'center',gap:30,paddingLeft:20}}>
        <FontAwesome name='arrow-left' style={{ fontSize:30,color:'#FF5733'}} onPress={modals}/>
        <Text  style={{fontSize:22,color:'#FF5733',fontFamily:'serif'}}>
        Javascript basic to advance:
        </Text>
    </View>
         <Text style={{fontSize:30,color:'black',fontFamily:'serif',marginTop:30}} > CONTENTS:</Text>
         <ScrollView>
                <>
                <View style={styles.style}>
                <Button title='datatype'  color={'#FF5733'} onPress={()=>{navigation.navigate('datatype')}}/>
                </View>
                <View style={styles.style}>
                <Button title='variable'  color={'#FF5733'} onPress={()=>{navigation.navigate('variable')}}/>
                </View>
                <View style={styles.style}>
                <Button title='operator'  color={'#FF5733'} onPress={()=>{navigation.navigate('operator')}}/>
                </View>
                <View style={styles.style}>
                <Button title='object'  color={'#FF5733'} onPress={()=>{navigation.navigate('object')}}/>
                </View>
                </>
                </ScrollView>    
                <Modal transparent={true} visible={modal} >
                    <View style={{width:250,height:250,backgroundColor:"white",marginLeft:70,marginTop:300,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:"black",fontSize:16,paddingTop:60}}>are you sure you want to logout?</Text>
                        <View style={{flexDirection:'row',alignItems:'center',gap:100,marginTop:50}}>
                        <Button title='NO'onPress={()=>setModal(false)} ></Button>
                        <Button title='YES'onPress={navigate}></Button>
                        </View>
                    </View>
                </Modal>
                </>
                )
            }
            const styles = StyleSheet.create({
              style:{
                  marginTop:20,
                  width:350,
                  marginLeft:20,
                  paddingBottom:10
              }
          })
export default Main 

//import { useNavigation } from '@react-navigation/native'
//const navigation1= useNavigation();
//useEffect(()=>{
   //const  unback = navigation1.addListener('beforeRemove',(e)=>{
//e.preventDefault();});
//return unback;
// });
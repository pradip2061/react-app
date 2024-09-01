import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Signup from './Signup';
import Submit from './Submit';

function Login()  {
    const tab = createMaterialTopTabNavigator();
    return (
    <tab.Navigator style={{marginTop:20}} screenOptions={{
        tabBarStyle:{backgroundColor:'#FF5733'},
        tabBarActiveTintColor:'white',
        tabBarLabelStyle:{fontSize:15},
    }
    }>
        <tab.Screen name='login' component={Signup} />
        <tab.Screen name='submit' component={Submit} />
    </tab.Navigator>
    )
  }
 // const style = StyleSheet.create({
   // styles:{
     //   borderWidth:1,
     //   width:330,
      //  marginLeft:30
  //  }
 // })
export default Login
//<View style={{marginTop:200}}>
      //  <View>
     //   <Text>login</Text>
     //   <Text> signup</Text>
      //  </View>
       // <TextInput style={style.styles} placeholder='Enter the email'></TextInput>
       // <TextInput style={style.styles} placeholder='Enter the password' secureTextEntry={true}></TextInput>
     //   <Button title='submit'></Button>
      //</View>
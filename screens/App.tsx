import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Main from './Main';
import Login from './Login';
import Splash from './Splash';
import Variable from './Variable';
import DataType from './DataType';
import Submit from './Submit';
import Operator from './Operator';
import Object1 from './Object1';
function App() {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName='splash' screenOptions={{headerStyle:{
  backgroundColor:'white',
}, 
headerTitleStyle:{
  fontSize:23,
  fontFamily:'serif',
},
headerTintColor:'#FF5733',
headerTitleAlign:'center',
}}>
  <Stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>
  <Stack.Screen name='LEARNGAIN' component={Login} />
<Stack.Screen name='Javascript basic to advance:' component={Main} options={{headerShown:false}}/>
<Stack.Screen name='variable' component={Variable}/>
<Stack.Screen name='datatype' component={DataType}/>
<Stack.Screen name='submit' component={Submit}/>
<Stack.Screen name='operator' component={Operator}/>
<Stack.Screen name='object' component={Object1}/>
</Stack.Navigator>
</NavigationContainer>
  )
}
export default App


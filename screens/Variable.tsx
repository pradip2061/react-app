import { Text, View } from 'react-native'
import React from 'react'
function Variable(){
  {
    return (
      <View style={{marginTop:10,
        padding:15
      }}>
        <Text style={{fontSize:28,color:'black'}}>Defination:</Text>
        <Text style={{fontSize:23,marginTop:10}}>
        ---   Variable is like as container. it stores number,string etc.
        </Text>
        <Text style={{fontSize:23}}> 
          ---  datatype should be define to use variable.
        </Text>
        <Text style={{fontSize:28,color:'black',marginTop:20}}>
          Examples:
        </Text>
        <Text style={{fontSize:23}}>
          int a = 19;
        </Text>
          <Text style={{fontSize:23}}>
          --- where a is variable,
          </Text>
          <Text style={{fontSize:23}}>
          --- variable_name can be named by user whatever wants but variable_name never can be  number and special symbol such as *,#,% etc.
          </Text>
      </View>
    )
  }
}
export default Variable;
 
import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native'


export default  RoundedButton =({handlePress,customStyle,icon}) => {
    const {buttonWrapper}= styles
   
    return(
        <TouchableOpacity onPress={handlePress}
                    style={[customStyle,buttonWrapper]}
            >
          <View>
              {icon}
          </View>
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    buttonWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',

    }
})
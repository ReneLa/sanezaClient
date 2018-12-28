import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {
    View,StyleSheet
} from 'react-native'
import colors from '../../../styles/colors'

import Search from '../../../containers/Search'



 class SearchScreen extends React.Component{
  
    render(){
        const {wrapperStyle } = styles
      
        return(
           <View style={wrapperStyle}>
               <Search navigation={this.props.navigation}/>
           </View>
        
        )
    }
}

 
 export default SearchScreen

const styles =StyleSheet.create({
    wrapperStyle:{
     display:'flex',
     flex:1, 
     backgroundColor:colors.gray03,
     
    },

})
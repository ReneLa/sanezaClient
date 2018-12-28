import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import {FontAwesome} from '@expo/vector-icons'
import { View,StyleSheet,Platform} from 'react-native';
import colors from '../../styles/colors'
import SingleShopContainer from '../../containers/SingleShopContainer'


 export default class SingleSalon extends Component{

    static navigationOptions=({navigation})=>({
        // title:"Saneza",
        headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                                 handlePress={()=>{navigation.goBack()}} 
                                 icon={<FontAwesome name="angle-left" 
                                             size={Platform.OS === 'ios' ? 35 : 30} color={colors.white}/>}/>,
        // headerStyle:{
        //     backgroundColor:colors.primary,
        //     elevation:4,
        //     borderBottomWidth:0,
        //     shadowColor: colors.gray01,
        //     shadowOffset: { height: 1},
        //     shadowOpacity: 0.4,
        //     shadowRadius: 5,

        // },
        
        headerTitleStyle:{
            fontWeight:Platform.OS === 'ios' ? '700' : '500',
            fontSize:Platform.OS === 'ios' ? 23 : 18,
             color:colors.white
        },
        headerTransparent:true,
        gesturesEnables:false
    })

    render(){
        // console.log(this.props)s
        const {navigation}= this.props
       

        return(
            <View style={styles.wrapper}>
               <SingleShopContainer navigation={navigation}/>
            </View>
        )

    }
}



const styles =StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray03,

    },
}) 
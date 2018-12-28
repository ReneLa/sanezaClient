import React from 'react'

import {View,Text, Platform,StyleSheet,ScrollView} from 'react-native'
import FlatList from '../../components/home/FLatList'


export default class SearchResults extends React.Component{
    constructor(props){
        super(props);
       
    }


    viewShop(id){
        this.props.navigation.navigate('SingleShop',{
            branchId:id
        })
    }

    renderResults(){
       
       const {results} = this.props
       
        if(results){
            return(
                results.map((list,index)=>{
                    return(
                        <View style={styles.singleContainer} key={index}>
                          <FlatList handlePress={this.viewShop.bind(this,list.branchId)}
                                    title={list.shopName}
                                    image={list.profilePicture}
                                    location={list.locationName}
                           />
                       </View>
                    )
                })
               )
            } 
    }

    render(){
        return(
            <ScrollView contentContainerStyle={styles.wrapperStyle}>
               {this.renderResults()}
              
            </ScrollView>
        )
    }
}



const styles=StyleSheet.create({
    wrapperStyle:{
       display:'flex',
       flex:1,
       backgroundColor:'transparent',
       paddingTop:Platform.OS === 'ios' ? 30 : 25,
       paddingBottom:Platform.OS === 'ios' ? 15 : 13
    },
    singleContainer:{
        display:'flex',
        marginTop:10,
        marginBottom:10
    }
})
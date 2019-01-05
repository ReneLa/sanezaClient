import React from 'react'
import PropTypes from 'prop-types'
import {Platform}from 'react-native'
import {connect} from 'react-redux';
import {getAllShops} from "../redux/actions"
import FlatList from  '../components/home/FLatList'
const salonImage= require('../images/salon4.jpg')

import {
    View,StyleSheet,Text,ScrollView
} from 'react-native'

class SalonContainer extends React.Component{
    constructor(props){
        super(props);
       
    }

    componentDidMount(){
        this.props.getAllShops();  
    }
    

    viewShop(id){
        this.props.navigation.navigate('SingleShop',{
            branchId:id
        })
    }

    renderSalons(){
        const {shops}=this.props
        const salons = shops? shops.filter( dat=> dat.shopType === 1) : ''

        if(salons){
            return(
                salons.map((salon,index)=>{
                    return(
                        <View style={styles.singleContainer} key={index}>
                          <FlatList handlePress={this.viewShop.bind(this,salon.branchId)}
                                    title={salon.shopName}
                                    image={salonImage}
                                    location={salon.streetname}
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
               {this.renderSalons()}
            </ScrollView>
        )
    }
}



function mapStateToProps({shop}){
    const {error,loading,shops}=shop
    return {
       error,loading, shops
    }
}

export default connect(mapStateToProps,{getAllShops}) (SalonContainer);


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
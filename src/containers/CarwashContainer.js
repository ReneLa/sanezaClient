import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Platform,AsyncStorage} from 'react-native'
import {getAllShops} from "../redux/actions"
import FlatList from  '../components/home/FLatList'

import {
    View,StyleSheet,Text,ScrollView
} from 'react-native'

class CarwashContainer extends React.Component{
    constructor(props){
        super(props);
       this.state={
           clientId:null
       }
    }

    componentDidMount= async()=>{
        this.setState({
            clientId:await AsyncStorage.getItem('USER_KEY')
        })
        // this.props.getAllShops();  
    }
    

    viewShop(id){
        this.props.navigation.navigate('SingleShop',{
            branchId:id
        })
    }
    renderCarwashes(){
        const {shops}=this.props
        const carwashes = shops ? shops.filter( dat=> dat.shopType === 2) : ''

        if(carwashes){
            return(
                carwashes.map((carwash,index)=>{
                    return(
                        <View style={styles.singleContainer} key={index}>
                          <FlatList handlePress={this.viewShop.bind(this,carwash.branchId)}
                                    title={carwash.shopName}
                                    image={carwash.profilePicture}
                                    location={carwash.streetname}
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
               {this.renderCarwashes()}
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

export default connect(mapStateToProps,{getAllShops}) (CarwashContainer);


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
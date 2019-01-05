import React from 'react';
import { View,StyleSheet,ScrollView,Platform} from 'react-native';

import {connect} from "react-redux";
import {getAllShops} from "../redux/actions"
import ShopList from '../components/home/ShopLists';
import colors from '../styles/colors';

class ShopsContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            shpError:''
        }

    }
    componentDidMount(){
        const {getAllShops}=this.props
        getAllShops(); 
    }
    
    
   
    render(){
         const {wrapperStyle,scrollViewStyle} =styles
         const {shops}=this.props

         const salons = shops ? shops.filter( dat=> dat.shopType === 1) : ''
         const carwashes= shops ? shops.filter(dat => dat.shopType===2) : ''
        return(
            <View style={wrapperStyle}>
                <ScrollView contentContainerStyle={scrollViewStyle}
                            showsVerticalScrollIndicator={false}>
                            
                  <ShopList navigation={this.props.navigation} salonList={salons} carwashList={carwashes}/>

                </ScrollView>
            </View>


        )
    }
}


const styles=StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray03,
    },
    scrollView:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray,
        paddingTop:Platform.OS === 'ios' ? 10 : 6,
        paddingBottom:Platform.OS === 'ios' ? 40 : 30
    },
    
})

function mapStateToProps({shop}){
    const {error,loading,shops}=shop
    return {
       error,loading, shops
    }
}

export default connect(mapStateToProps,{getAllShops})(ShopsContainer)
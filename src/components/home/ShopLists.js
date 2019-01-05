import React from 'react'
import {
    View,StyleSheet,Image,Platform,
    Text,ScrollView} from 'react-native'

import colors from '../../styles/colors'
import ShopCard from '../common/ShopCard'

const salonImage= require('../../images/salon4.jpg')
const carImage= require('../../images/salon1.jpg')

export default class ShopList extends React.Component{
    

    ViewShop(id){
        this.props.navigation.navigate('SingleShop',{
            branchId:id
        })
    }

    renderSalons(){
        
        const {salonList} =this.props
        if(salonList){
            return(
                salonList.map((salon,index)=>{
                    return(
                        <View style={styles.singleContainer} key={index}>
                          <ShopCard title={salon.shopName} 
                            handlePress={this.ViewShop.bind(this,salon.branchId)}
                            image={<Image source={salonImage} 
                            style={{width:'100%',height:'100%',flex:1}}/>}
                            location={salon.streetname}
                            rating={' '+salon.rating +' +'}
                           />
                       </View>
                    )
                })
               )
            } 
    }

    renderCarwashes(){
        
        const {carwashList} =this.props
        if(carwashList){
            return(
                carwashList.map((carwash,index)=>{
                    return(
                        <View style={styles.singleContainer} key={index}>
                          <ShopCard title={carwash.shopName} 
                            handlePress={this.ViewShop.bind(this,carwash.branchId)}
                            image={<Image source={carImage} 
                            style={{width:'100%',height:'100%',flex:1}}/>}
                            location={carwash.streetname}
                            rating={' '+carwash.rating +' +'}
                           />
                       </View>
                    )
                })
               )
            } 
    }

    render(){
        const {wrapperStyle,scrollViewStyle,headerTextStyle,categoryWrapperStyle} =styles
        return(
            <View style={wrapperStyle}>
               <View style={categoryWrapperStyle}> 
                 {/* <Text style={headerTextStyle}>Salons</Text> */}
                 <ScrollView 
                //  horizontal={true} 
                   contentContainerStyle={scrollViewStyle}
                //    showsHorizontalScrollIndicator={false}
                   >  
                   {this.renderSalons()}
               </ScrollView>
               </View>

               <View style={categoryWrapperStyle}> 
                 {/* <Text style={headerTextStyle}>Carwashes</Text> */}
                 <ScrollView 
                //    horizontal={true} 
                   contentContainerStyle={scrollViewStyle}
                //    showsHorizontalScrollIndicator={false}
                   >  
                   {this.renderCarwashes()}
               </ScrollView>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray03,
        // marginTop:10
    },
    scrollViewStyle:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray,
        
    },
    headerTextStyle:{
        marginLeft:Platform.OS === 'ios' ? 10 : 7,
        color:colors.black01,
        fontSize:Platform.OS === 'ios' ? 18 : 15,
        fontWeight:Platform.OS === 'ios' ? '700' : '500'
    },
    singleContainer:{
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    categoryWrapperStyle:{
        display:'flex',
        backgroundColor:colors.gray,
        borderBottomWidth:1,
        borderBottomColor:colors.gray03,
        paddingTop:10,
        // marginTop:10,
        marginBottom:10
    }
})
import React, { Component } from 'react';
import {FontAwesome} from '@expo/vector-icons'

import {connect} from 'react-redux';
import {getShopServices} from "../../redux/actions"
import { View,StyleSheet,Platform,
    ScrollView, Text} from 'react-native';   
import RoundedButton from '../../components/buttons/RoundedButton' 
import BottomContainer from '../../components/BottomContainer'
import Button from '../../components/buttons/Button'
import colors from '../../styles/colors'
import SingleService from'../../components/home/SingleService'

class BookServiceScreen extends Component{
     
    static navigationOptions=({navigation})=>({
        title:"Saneza",
        headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                                 handlePress={()=>{navigation.goBack()}} icon={<FontAwesome name="angle-left" size={35} color={colors.white}/>}/>,
        headerStyle:{
            backgroundColor:colors.primary,
            elevation:4,
            borderBottomWidth:0,
            shadowColor: colors.gray01,
            shadowOffset: { height: 2},
            shadowOpacity: 0.4,
            shadowRadius: 5,

        },
        headerTitleStyle:{
            fontWeight:'700',
            fontSize:23,
             color:colors.white
        },
        gesturesEnables:false
    })

    constructor(props){
        super(props);
        this.state ={
            loading:true,   
        }
    
        this.onBookPress=this.onBookPress.bind(this)
    
    }
     


    componentDidMount(){
        const {branchId} = this.props.navigation.state.params
        this.props.getShopServices(branchId);
    }

      renderCategory(){
          const {categoryWrapperStyle,
                  categoryHeaderStyle,itemContainerStyle} =styles
          const {shopServices}=this.props

          if(shopServices){
              return(
                  shopServices.map(servCat =>{
                      return(
                          <View style={categoryWrapperStyle} 
                                 key={servCat.categoryId}
                                 
                                 >
                              <Text style={categoryHeaderStyle}>{servCat.name}</Text>
                              <View style={itemContainerStyle}>
                                  {this.renderServices(servCat.services)}
                              </View>
                          </View>
                      )
                  })
              )
          }
      }

     renderServices(listings){
        const {shopName,shopLocation,branchId} = this.props.navigation.state.params
         return(
             listings.map(list =>{
                 return(
                     <SingleService 
                            key={list.serviceId}
                            id={list.serviceId}
                            shopName={shopName}
                            shopLocation={shopLocation}
                            item={list}
                            branchId={branchId}
                            name={list.serviceName}
                            price={list.price}
                            duration={list.duration} 
                            />
                 )
             })
         )
     }

    onBookPress(){
        const {navigate}=this.props.navigation
        const {branchId} = this.props.navigation.state.params

         navigate('BookingDetails',{
            branchId
         })
    }
   
   
  render(){
           
            const itemQty = this.props.byId.length;
            const initialValue=0;
            const sum = this.props.byHash.reduce(
                           (total, currentValue) => {

                            return total + currentValue.price

                           },
                           initialValue        
                                
                    );
                
            const showBottomNav = itemQty > 0 ? true : false
            const {shopName,branchId} = this.props.navigation.state.params

        return(
        <View style={styles.wrapper}>
         <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.headerWrapper}>
              <Text style={styles.headerText}>{shopName}</Text>
          </View>
          
            <View>
            {this.renderCategory()}
           </View>
           
        </ScrollView>
            <BottomContainer 
               showBottomNav={showBottomNav}
               textContainer={
                   <View style={{backgroundColor:'transparent',padding:15,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:Platform.OS === 'ios' ? 18 : 16,color:'#fff'}}>{itemQty} servive(s) selected </Text>
                    <Text style={{fontSize:Platform.OS === 'ios' ? 25: 20,color:'#fff',fontWeight:'bold'}} >{sum +' rwf'}</Text>
                   </View>}
               buttonTwo={<Button handlePress={this.onBookPress}
               label="Book Now"
               textSize={Platform.OS === 'ios' ? 22  : 18}
               
               textColor={colors.black01}
               customStyle={{backgroundColor:colors.gray03,borderRadius:2,display:'flex',width:'100%',flex:1}}/>}
                   customStyle={{position:'absolute',height:Platform.OS === 'ios' ? 75 : 65 ,backgroundColor:colors.primary}}
                   />   
        </View>
        )
       
    }
}


function mapStateToProps({shop,cart}){
    const {error,loading,shopServices} = shop
    const {byId,byHash} = cart
    
    return {
       error,loading, shopServices,byId,byHash
    }
}

export default connect(mapStateToProps,{getShopServices})(BookServiceScreen)

const styles =StyleSheet.create({
    
    wrapper:{
        display:'flex',
        flex:1, 
        backgroundColor:colors.gray01,
    },
    scrollView:{
        display:'flex',
        
        paddingRight:10,
        paddingLeft:10
    },
    headerWrapper:{
        display:'flex',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:15,
        marginBottom:Platform.OS === 'ios' ? 30 : 25

    },
     
    headerText:{
        fontSize:Platform.OS === 'ios' ? 25 : 20,
        color:colors.black02,
        fontWeight: Platform.OS === 'ios' ?'500' : '400',
        marginTop:Platform.OS === 'ios' ? 20 : 15,
        marginBottom: Platform.OS === 'ios' ? 20: 15,
    },    
    categoryWrapperStyle:{
        display:'flex',
        
    },
    categoryHeaderStyle:{
        color:colors.black01,
        fontSize:Platform.OS === 'ios' ? 23:17,
        fontWeight:Platform.OS === 'ios' ? '600':'500',
        marginTop:5,
        marginBottom:5
    },
    itemContainerStyle:{
        display:'flex',
        marginLeft:10,
        marginRight:10
    }
})


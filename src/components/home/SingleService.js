import React from 'react'
import {connect} from 'react-redux'
import {getService,addToCart,removeFromCart,refresh} from '../../redux/actions'
import {View, Text, StyleSheet,TouchableOpacity,Platform,AsyncStorage} from 'react-native'
import colors from '../../styles/colors'
import CustomCheckBox from '../forms/CustomCheckBox'
import ServiceCard from '../common/ServiceCard'
import {Entypo} from '@expo/vector-icons';
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

class SingleService extends React.Component{

    constructor() {
        super();
         this.state = {
          checked: false,
          visible:false,
          client:''
        };
      }

      componentDidMount=async()=>{
        const retrievedItem =  await AsyncStorage.getItem("client");
        const item = JSON.parse(retrievedItem);
          this.setState({client:item.clientId})
        
        }

      toggleState=()=>{
          this.setState({checked:false})
          this.handleRemoveFromCart()
      }
    
     onCloseModal=()=>{

        this.setState({checked:false, visible:false})
    }

    onFetchService=()=>{
        this.props.getService(this.props.id)
        this.setState({checked:true,visible:true})
    }
    
    handleRemoveFromCart=()=>{
        this.props.removeFromCart(this.props.id)
        
    }

    handleAddToCart=()=>{
        const {service}=this.props
        const newItem={
            clientId:this.state.client,
            id:service.serviceId,
            name:service.serviceName,
            date:this.props.dateSelected,
            time:this.props.timeSelected,
            price:service.price,
            branchId:this.props.branchId
  
        }
        this.props.addToCart(newItem)
        
        this.setState({visible:false})
     }

    render(){
       
        const {wrapperStyle,nameWrapper,priceWrapper,nameText}=styles

        const {image,id,item,name,duration,price,dateSelected, handlePress,shopName,shopLocation}=this.props
    
        return(
            <TouchableOpacity style={[wrapperStyle]}
               onPress={this.onFetchService}
                 >
    
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}} >
                  {this.state.checked ? 
                  
                     <CustomCheckBox key={id} 
                                  checked={this.state.checked}
                                  toggle={this.toggleState}  
                                  id={id} 
                                  />  :
                    <Entypo name='menu' color={colors.gray} size={30}/>
                  }
                 </View>
                
               <View style={nameWrapper}>
                  <Text style={nameText}>{name}</Text>
                
               </View>
    
              <View style={nameWrapper}>
                 <Text style={nameText}>{duration}</Text>
              </View>
    
               <View style={priceWrapper}>
                 <Text style={nameText}>{price + 'Rwf'}</Text>
                </View>
                <ServiceCard
                      modalVisible={this.state.visible}
                      service={this.props.service}
                      closeModal={this.onCloseModal}
                      shop={shopName}
                      location={shopLocation}
                      close={this.close}
                      disabled={false}
                      addItem={this.handleAddToCart}
                />
                </TouchableOpacity>
            )
    }
    
}

function mapStateToProps({shop,cart}){
    const {service} = shop
    const {dateSelected,timeSelected}=cart
    return {
        service,dateSelected,timeSelected
    }
}


export default connect(mapStateToProps,{getService,addToCart,removeFromCart,refresh})(SingleService)

const styles = StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:colors.white,
        borderColor:'#D5D8DC',
        borderWidth:0.5,
        marginTop:5,
        marginBottom:5,
        borderRadius:5,
        // padding:10,
        height:hp('10%')
    },
  
   
    nameWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:2
    },
    nameText:{
        fontSize:hp('2.5%'),
        fontWeight:Platform.OS === 'ios' ?'400' : '300',
        color:colors.black01
    },
    locationText:{
        fontSize:hp('2%'),
        fontWeight:Platform.OS === 'ios' ?'300':'200',
        color:colors.black01
    },
    priceWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:2
    }
})
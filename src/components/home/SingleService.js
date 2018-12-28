import React from 'react'
import {connect} from 'react-redux'
import {getService,addToCart,removeFromCart,refresh} from '../../redux/actions'
import {View, Text, StyleSheet,TouchableOpacity,Platform} from 'react-native'
import colors from '../../styles/colors'
import CustomCheckBox from '../forms/CustomCheckBox'
import ServiceCard from '../common/ServiceCard'
import {Entypo} from '@expo/vector-icons';

class SingleService extends React.Component{

    constructor() {
        super();
         this.state = {
          checked: false,
          visible:false
        };
      }

      toggleState=()=>{
          this.setState({checked:false})
          this.handleRemoveFromCart()
      }
     close=()=>{
        this.setState({visible:false})
     }
     onCloseModal=()=>{
        this.setState({checked:false, visible:false})
        this.props.refresh({prop:'service'})
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
            id:service.serviceId,
            name:service.serviceName,
            time:this.props.dateSelected,
            price:service.price,
            branchId:this.props.branchId
  
        }
        this.props.addToCart(newItem)
        
        this.setState({visible:false})
     }

    render(){
       
        const {wrapperStyle,nameWrapper,priceWrapper,nameText}=styles

        const {image,id,item,name,duration,price,dateSelected, handlePress}=this.props
    //    const date=dateSelected === null ? '' : dateSelected.toDateString()
    //     const time=dateSelected === null ? '' : dateSelected.toTimeString()
    //     const disabled = dateSelected === null ? true : false
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
                      onClose={this.onCloseModal}
                      close={this.close}
                    //   date={date}
                      disabled={false}
                    //   time={time}
                      addItem={this.handleAddToCart}
                />
                </TouchableOpacity>
            )
    }
    
}

function mapStateToProps({shop,cart}){
    const {service} = shop
    const {dateSelected}=cart
    return {
        service,dateSelected
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
        // padding:10,
        height:Platform.OS === 'ios' ? 70 :55
    },
  
   
    nameWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:2
    },
    nameText:{
        fontSize:Platform.OS === 'ios' ? 18 : 15,
        fontWeight:Platform.OS === 'ios' ?'400' : '300',
        color:"#000"
    },
    locationText:{
        fontSize:Platform.OS === 'ios' ? 16 :14,
        fontWeight:Platform.OS === 'ios' ?'300':'200',
        color:"#000"
    },
    priceWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:2
    }
})
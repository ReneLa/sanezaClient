import React from 'react'
import {View,Image, Text,StyleSheet,TouchableOpacity,ImageBackground,AsyncStorage,Platform} from 'react-native'
import colors from '../../styles/colors'
import CustomCheckBox from '../forms/CustomCheckBox'
import {connect} from 'react-redux' 
import {addToCart,getProduct,removeFromCart} from '../../redux/actions'
const salonImage= require('../../images/salon4.jpg')


class ProductCard extends React.Component{
    constructor() {
        super();
         this.state = {
          checked: false,
          visible:false,
          client:''
        };
      }

      componentDidMount= async()=>{
        const retrievedItem =  await AsyncStorage.getItem("client");
        const item = JSON.parse(retrievedItem);
          this.setState({client:item.clientId})
    }

      toggleState=()=>{
        this.setState({checked:false})
        this.handleRemoveFromCart()
    }
    

      handleRemoveFromCart=()=>{
        this.props.removeFromCart(this.props.id)
        
    }


      handleAddToCart=()=>{
        this.setState({checked:true})
        const clientId=this.state.client
        const time ='2019-10-03 00:25:00'
        const quantity=1
        const orderNo='HGBJKKDLSA'
        const {id,name,branchId,price}=this.props
        const newProduct={
            clientId,
            id,
            name,
            price,
            time,
            branchId,
            quantity,
            orderNo
        }
        this.props.addToCart(newProduct)
        this.setState({visible:false})
     }

    render(){
        const {handlePress,image,name,price,id} = this.props
        const {wrappeStyle,cardImageStyle,cardContent,priceStyle,nameStyle,
            cardMeta,titleWrapper,lineBreak,priceTextStyle
        } = styles
        
        return(
            <TouchableOpacity style={wrappeStyle} onPress={this.handleAddToCart}>
               <View style={cardImageStyle}>
                  <ImageBackground source={salonImage} style={{width:'100%',height:'100%'}}>
                      <CustomCheckBox  
                                   checked={this.state.checked}
                                  toggle={this.toggleState}  
                                  id={id} 
                         customStyle={{display:this.state.checked ? 'flex':'none' ,left:-50}}
                       />   
                  </ImageBackground>
                   
               </View>
               <View style={cardContent}>
                  <View style={titleWrapper}>
                      <Text style={nameStyle}>{name}</Text>
                  </View>
               </View>
               <View style={lineBreak}/>
               <View style={cardMeta}>
                    <Text style={priceTextStyle}>{"Price:"}</Text>
                    <Text style={priceStyle}>{price+" Rwf"}</Text>
               </View>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps({shop}){
    const {product} = shop
    
    return {
        product
    }
}


export default connect(mapStateToProps,{getProduct,addToCart,removeFromCart})(ProductCard)

const styles=StyleSheet.create({
    wrappeStyle:{
      display:'flex',
      minHeight:Platform.OS === 'ios' ? 150 : 100,
      width:Platform.OS === 'ios' ? 180 :140,
      backgroundColor:colors.white,
      borderColor:colors.gray01,
      borderWidth:0.5,
      borderRadius:2,
      elevation:5,
      margin:5,
      shadowColor: colors.gray02,
       shadowOffset: { height: 2},
       shadowOpacity: 0.2,
       shadowRadius: 4,
       marginBottom:Platform.OS === 'ios' ? 20:15
    },
    cardImageStyle:{
        display:'flex',
        height:Platform.OS === 'ios' ? 130 : 100,
    },
    cardContent:{
        display:'flex',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:colors.white
    },
    titleWrapper:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
    },
    nameStyle:{
        color:colors.black01,
        fontSize:Platform.OS === 'ios' ? 22 : 17,
        fontWeight:Platform.OS === 'ios' ? '600' : '500'
    },
    lineBreak:{
        display:'flex',
        borderBottomWidth:Platform.OS === 'ios' ? 0.8 : 0.5,
        borderBottomColor:colors.gray03,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        marginRight:10,
        marginLeft:10
    },
    cardMeta:{
        display:'flex',
        backgroundColor:colors.white,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    priceTextStyle:{
        color:colors.gray,
        fontSize:Platform.OS === 'ios' ? 16: 12,
        fontWeight:Platform.OS === 'ios' ? '400' : '300'
    },
    priceStyle:{
        color:colors.black01,
        fontSize:Platform.OS === 'ios' ? 18 :14,
        fontWeight:Platform.OS === 'ios' ? '400': '300'
    },
})
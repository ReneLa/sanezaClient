import React from 'react'
import {View,Text,StyleSheet,Modal,Image,
    TouchableOpacity,Platform} from'react-native'
import {FontAwesome,EvilIcons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import {addToCart,refresh} from '../../redux/actions'
import colors from '../../styles/colors'
import Calendar from '../Calendar';
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

const image1= require('../../images/salon1.jpg')

class ServiceCard extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }

    onOpen=()=>{
        this.setState({show:true})
    }
    onClose=()=>{
        this.setState({show:false})       
    }

    render(){
        const {modalVisible,service,shop,location,dateSelected,timeSelected,
            disabled, closeModal,addItem}=this.props

        const {wrapperStyle,container,cancelButton,titleWrapper,infoStyle,
              buttonStyle,labelStyle,imageWrapper,descriptionWrapper,
              headerstyle,containStyle,ValueText
        }=styles
    
        return(
            <Modal 
               animationType={'slide'}
               visible={modalVisible}
               transparent
             >
                <View style={wrapperStyle}>
                  <View style={container}>
                         <TouchableOpacity 
                           onPress={closeModal}
                           style={{
                             display:'flex',
                             alignItems:'flex-end',
                             paddingRight:5
                         }}>
                             <EvilIcons name={'close-o'} 
                              color={colors.red} 
                              style={{
                                  top:-2,
                                  right:-12
                             }} 
                             size={45}/>
                         </TouchableOpacity>

                         <View style={imageWrapper}>
                            <Image source={image1} style={{width:'100%',height:'100%'}}/>
                         </View>

                         <View style={descriptionWrapper}>
                           <View style={titleWrapper}>
                               <Text style={headerstyle}>  
                                   {service.serviceName}
                               </Text>
                           </View>
                           <View style={infoStyle}>
                              <View  style={containStyle}>
                                   <Text>Price</Text>
                                    <Text style={ValueText}>{service.price+' Rwf'}</Text>
                              </View>
                              <View style={containStyle}>
                                 <Text>Duration</Text>
                                 <Text style={ValueText}>{service.duration +' minutes'}</Text>
                              </View>
                           </View>

                           <View style={infoStyle}>
                              <View  style={containStyle}>
                                   <Text>Shop</Text>
                                    <Text style={ValueText}>{shop}</Text>
                              </View>
                              <View style={containStyle}>
                                 <Text>Location</Text>
                                 <Text style={ValueText}>{location}</Text>
                              </View>
                           </View>
                         
                         </View>

                         <View style={infoStyle}>
                             <View style={[{borderBottomColor:colors.black01,borderBottomWidth:1},containStyle]}>
                                 <Text>Schedule Time</Text>
                                 <Text style={ValueText}>{dateSelected}</Text>
                                 <Text style={ValueText}>{timeSelected}</Text>
                             </View>
                             <View style={[containStyle,{alignItems:'center',justifyContent:'center',paddingLeft:10,paddingRight:10}]}>
                             <TouchableOpacity
                             
                               onPress={this.onOpen} 
                               style={{
                                   display:'flex',
                                   padding:10,
                                   borderRadius:3,
                                   alignItems:'center',
                                   justifyContent:'center',
                                   backgroundColor:colors.red,
                                   
                               }}>
                              <Text style={[{color:colors.white,
                                fontSize:hp('2.8%')},labelStyle]}>
                                    Choose Date
                                </Text>
               
                          </TouchableOpacity> 
                             </View>
                         </View>
                         <View style={{
                              display:'flex',
                              width:'100%',
                              position:'absolute',
                              bottom:0,
                              left:0,
                              shadowColor: colors.gray02,
                              shadowOffset: { height: 3},
                              shadowOpacity: 0.8,
                              shadowRadius: 5,
                              padding:10,
                              borderTopWidth:1,
                              alignItems:'center',
                              justifyContent:'center',
                              borderColor:colors.gray02
                         }}>
                         <TouchableOpacity
                             disabled={disabled}
                             onPress={addItem} 
                               style={[{backgroundColor:disabled ? colors.gray : colors.primary },buttonStyle]}>
                              <Text style={[{color:colors.white,
                                fontSize:hp('3%')},labelStyle]}>
                                    Book Service
                                </Text>
               
                          </TouchableOpacity> 
                          </View>
                      </View> 
                      <Calendar
                         modalVisible={this.state.show}
                         close={this.onClose}
                      />
                </View>
            </Modal>
        )
    }
}

function mapStateToProps({cart}){
   
    const {byId,byHash,timeSelected,dateSelected} = cart
    return{
        byId,dateSelected,byHash
    }
}
export default connect(mapStateToProps,{})(ServiceCard)

const styles =StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        backgroundColor:'rgba(0,0,0,0.6)',
        position:'relative',
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    container:{
          display:'flex',
          flexDirection:'column',
          position:'absolute',
          bottom:0,
          left:0,
          borderWidth:1,
          borderRadius:5,
          borderColor:'#D6DBDF',
          width:'100%',
          height:hp('75%'),
          backgroundColor:colors.white,
          
    },
   imageWrapper:{
       display:'flex',
       paddingLeft:40,
       paddingRight:40,
       height:hp('20%')
   },
   descriptionWrapper:{
       display:'flex',
    //    flex:0.5,
       padding:10,

   },
   titleWrapper:{
       display:'flex',
        alignItems:'center',
        justifyContent:'center',

   },
   headerstyle:{
       color:colors.black01,
       fontSize:hp('3%'),
       fontWeight:'600'
   },
   infoStyle:{
       display:'flex',
       flexDirection:'row',
    //    padding:10,
      
   },
   containStyle:{
     display:'flex',
     padding:5,
     flex:0.5
   },
    labelStyle:{
        fontWeight:Platform.OS === 'ios' ? '500' : '400',
        marginLeft:10,
        
    },
    buttonStyle:{
        display:'flex',
        width:wp('85%'),
        justifyContent:'center',
        alignItems:'center',
        height:hp('7%'),
        borderRadius:4,
        padding:10,
        
    },
    ValueText:{
        color:colors.blue01,
        fontWeight:'500',
        fontSize:hp('2.5%'),
        marginTop:5
    }
})


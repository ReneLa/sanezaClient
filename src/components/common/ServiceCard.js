import React from 'react'
import {View,Text,StyleSheet,Modal,Image,
    TouchableOpacity,Platform} from'react-native'
import {FontAwesome,EvilIcons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import {addToCart,refresh} from '../../redux/actions'
import colors from '../../styles/colors'
import Calendar from '../Calendar';
const image1= require('../../images/salon1.jpg')

class ServiceCard extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
    }

    onOpen=()=>{
        this.setState({visible:true})
    }
    onClose=()=>{
        this.setState({visible:false})
        
    }
    render(){
        const {modalVisible,service,
            // date,time,
            disabled,
            onClose,addItem}=this.props
        const {wrapperStyle,container,cancelButton,titleWrapper,infoStyle,
              buttonStyle,labelStyle,imageWrapper,descriptionWrapper,
              headerstyle,containStyle,ValueText
        }=styles
        
        return(
            <Modal 
               animationType={'slide'}
               visible={modalVisible}
               transparent
               onRequestClose={onClose}
             >
                <View style={wrapperStyle}>
                  <View style={container}>
                         <TouchableOpacity 
                           onPress={onClose}
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
                         </View>
                         <View style={infoStyle}>
                             <View style={[{borderBottomColor:colors.black01,borderBottomWidth:1},containStyle]}>
                                 <Text>Schedule Time</Text>
                                 {/* <Text style={ValueText}>{date}</Text>
                                 <Text style={ValueText}>{time}</Text> */}
                             </View>
                             <View style={containStyle}>
                             <TouchableOpacity
                             
                             onPress={this.onOpen} 
                               style={{
                                   display:'flex',
                                   padding:10,
                                   alignItems:'center',
                                   justifyContent:'center',
                                   backgroundColor:colors.red
                               }}>
                              <Text style={[{color:colors.white,
                                fontSize:Platform.OS === 'ios' ? 17:13},labelStyle]}>
                                    Choose Date
                                </Text>
               
                          </TouchableOpacity> 
                             </View>
                         </View>
                         <TouchableOpacity
                             disabled={disabled}
                             onPress={addItem} 
                               style={[{backgroundColor:disabled ? colors.gray : colors.primary },buttonStyle]}>
                              <Text style={[{color:colors.white,
                                fontSize:Platform.OS === 'ios' ? 17:13},labelStyle]}>
                                    Add
                                </Text>
               
                          </TouchableOpacity> 
                         
                      </View> 
                      <Calendar
                         modalVisible={this.state.visible}
                         close={this.onClose}
                      />
                </View>
            </Modal>
        )
    }
}

function mapStateToProps({cart}){
   
    const {byId,byHash,dateSelected} = cart
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
          backgroundColor:colors.white,
          
    },
   imageWrapper:{
       display:'flex',
       paddingLeft:40,
       paddingRight:40,
       height:130
   },
   descriptionWrapper:{
       display:'flex',
       padding:10,

   },
   titleWrapper:{
       display:'flex',
        alignItems:'center',
        justifyContent:'center',

   },
   headerstyle:{
       color:colors.black01,
       fontSize:22,
       fontWeight:'600'
   },
   infoStyle:{
       display:'flex',
       flexDirection:'row',
       padding:10,
       marginBottom:12
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
        flex:1,
        
        justifyContent:'center',
        alignItems:'center',
        height:Platform.OS === 'ios' ? 50 : 40,
        borderRadius:1,
        width:'100%'
    },
    ValueText:{
        color:colors.blue01,
        fontWeight:'500',
        fontSize:16,
        marginTop:5
    }
})


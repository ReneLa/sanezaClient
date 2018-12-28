import React from 'react'
import {connect} from 'react-redux'
import {dateChanged} from '../redux/actions'
import {View,Text,StyleSheet,ScrollView,
    DatePickerIOS,Animated,Easing,
        Modal,TouchableOpacity,Platform
    } from'react-native'
import {FontAwesome} from '@expo/vector-icons'
import colors from '../styles/colors'


class Calendar extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            date:'',
            visible:true,
            positionValue: new Animated.Value(60),
         };
         this.animatedCalendar=this.animatedCalendar.bind(this)
        this.setDate = this.setDate.bind(this);
      }

    animatedCalendar(value){
        const {positionValue}= this.state;
        Animated.timing(
            positionValue,
            {
                toValue:value,
                duration:300,
                velocity:3,
                tension:2,
                friction:8,
                easing:Easing.easeOutBack,
            }
        ).start();
    }

     
      setDate(newDate) {
        //    const cDate= new Date(date).toDateString()
          this.setState({chosenDate:newDate})

          this.props.dateChanged(newDate)
      }

      showCalendar(){
          this.setState({visible:true})
      }
      closePicker(){
        
          this.setState({visible:false})
          this.props.close()
      }
    render(){
        const {modalVisible,onClose}=this.props
        const {positionValue}= this.state
        const {wrapperStyle,container,titleWrapperStyle,calendarPicker,pickerHeaderStyle,
        titleStyle,dateWrapper,dateText
    }=styles
    console.log(this.props.dateSelected)
    const today= new Date()
    return(
        <Modal 
           animationType={'slide'}
           visible={modalVisible}
           transparent
           onRequestClose={onClose}
         >
            <View style={wrapperStyle}>
              <View style={container}>
                     
              <View style={{flex:1}}>
               <View style={titleWrapperStyle}>
                   <Text style={titleStyle}>Available Times</Text>
               </View>
               </View>

               <Animated.View style={[{display:this.state.visible ? 'flex': 'none',transform:[{translateY:positionValue}]},calendarPicker]}>
               <View style={pickerHeaderStyle}>
                 <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} 
                         onPress={this.closePicker.bind(this)}>
                  <Text style={{
                      color:colors.black01,
                      fontSize:20,
                      top:20,
                      fontWeight:'600'
                  }}>
                  
                       Done
                   </Text>
                  </TouchableOpacity>
                </View> 
               <DatePickerIOS
                   mode={'datetime'}
                   minimumDate={today}
                   style={{width:'100%',height:450}}
                   date={this.state.chosenDate}
                   onDateChange={this.setDate}
               />       
               </Animated.View>
            </View> 
            
            </View>
        </Modal>
    )
  }
}

const styles =StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        backgroundColor:'rgba(0,0,0,0.0)',
        position:'relative',
        flex:1,
    },
    container:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        bottom:0,
        left:0,
        // borderWidth:1,
        width:'100%',
        height:450,
        backgroundColor:colors.white,
    },

    titleWrapperStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    titleStyle:{
        fontSize:25,
        fontWeight:'700',
        color:colors.black01
    },
    dateWrapper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10
    },
    dateText:{
        fontSize:20,
        fontWeight:'600',
        color:colors.black01,
        marginBottom:15,
    },
    calendarPicker:{
        height:100,
        bottom:0,
        left:0,
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor:colors.white,
        
    },
    pickerHeaderStyle:{
       display:'flex',
       alignItems:'flex-end',
       justifyContent:'center',
        padding:10,
        marginBottom:10,
        height:80,
        borderBottomColor:colors.gray,
        borderBottomWidth:0.5

    }
})

function mapStateToProps({cart}){
    const {dateSelected} =cart
    return {
       dateSelected
    }
}

export default connect(mapStateToProps,{dateChanged})(Calendar)
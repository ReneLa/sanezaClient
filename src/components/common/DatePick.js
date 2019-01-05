import React from 'react'
import {View,Text,StyleSheet,
    DatePickerIOS,Animated,Easing,
        Modal,TouchableOpacity,
    } from'react-native'
import {FontAwesome} from '@expo/vector-icons'
import colors from '../../styles/colors'


class DatePick extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            date:'',
            showHours:false,
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
          const {prop, set}=this.props
          this.setState({chosenDate:newDate})
          set({prop,newDate})   
      }

      closePicker(){
          this.props.close()
      }

    render(){
        const {modalVisible,close}=this.props
        const {positionValue}= this.state
        const {wrapperStyle,container,pickerHeaderStyle,
       }=styles
    
    const today= new Date()

    return(
        <Modal 
           animationType={'slide'}
           visible={modalVisible}
           transparent
           onRequestClose={close}
         >
            <View style={wrapperStyle}>
    
               <Animated.View style={[container,{display:this.state.visible ? 'flex': 'none',transform:[{translateY:positionValue}]}]}>
               <View style={pickerHeaderStyle}>
                 <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} 
                         onPress={close}>
                  <Text style={{
                      color:colors.blue01,
                      fontSize:18,
                      fontWeight:'500'
                  }}>
                       Done
                   </Text>
                  </TouchableOpacity>
                </View> 
               <DatePickerIOS
                   mode={'date'}
                   maximumDate={today}
                   style={{width:'100%',height:300,backgroundColor:colors.gray02}}
                   date={this.state.chosenDate}
                   onDateChange={this.setDate}
               />       
               </Animated.View>
            
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
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
       
        // height:'auto',
       
        backgroundColor:colors.white,
    },
    calendarPicker:{
        height:'auto',
        bottom:0,
        left:0,
        // borderColor:colors.black01,
        // borderWidth:1,
        justifyContent: 'center',
        backgroundColor:colors.gray,
        
    },
    pickerHeaderStyle:{
       display:'flex',
       alignItems:'flex-end',
       justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderTopColor:colors.gray02,
        // borderTopWidth:1,
        // borderBottomColor:colors.gray,
        // borderBottomWidth:0.5

    }
})

function mapStateToProps({cart}){
    const {dateSelected,time} =cart
    return {
       dateSelected,time
    }
}

export default DatePick
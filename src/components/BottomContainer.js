import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import {EvilIcons} from '@expo/vector-icons'
import { View, Text,StyleSheet, Animated,Easing } from 'react-native';



export default class BottomContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            positionValue: new Animated.Value(60),
        }
        this.animatedContainer=this.animatedContainer.bind(this)
    }

    animatedContainer(value){
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

    render(){
        
        const { buttonOne,customStyle,buttonTwo,containerOneStyle,
            containerTwoStyle,showBottomNav,textContainer,selected
         } = this.props
        showBottomNav? this.animatedContainer(0) : this.animatedContainer(80)
        const {positionValue}= this.state
        const content = buttonOne || textContainer
        return(
            <Animated.View style={[{display:showBottomNav ?'flex': 'none',transform:[{translateY:positionValue}]},customStyle,styles.wrapper]}>
               
                   <View style={[containerOneStyle,styles.firstContent]}>
                    {content}
                    </View>
                    <View style={[containerTwoStyle,styles.secondContent]}>
                       {buttonTwo}
                    </View>
                
            </Animated.View>
        )
    }
}

BottomContainer.propTypes={
    showBottomNav:PropTypes.bool.isRequired,
   buttonOne:PropTypes.object,
   buttonTwo:PropTypes.object,
   selected:PropTypes.bool
}


const styles= StyleSheet.create({
   wrapper:{
     display:'flex',
     flexDirection:'row', 
     width:'100%',
     bottom:0,
     left:0,
     elevation:8,
   }, 
  firstContent:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    flex:1
},
secondContent:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    width:'50%'
   },
})
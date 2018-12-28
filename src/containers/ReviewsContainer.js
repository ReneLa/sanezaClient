import React, { Component } from 'react';
import { View,Text,StyleSheet,Platform,
      TouchableOpacity,ImageBackground}
       from 'react-native';
import colors from '../styles/colors'
const image= require('../images/salon4.jpg');



export default class ReviewsContainer extends Component{
  
 constructor(props){
        super(props);

        this.onSubmitRatings=this.onSubmitRatings.bind(this)
        
    
    }
   
    onSubmitRatings(){
        alert('Submitting ratings ')
    }

    
    render(){
        const {wrapperStyle,headerContainer,headerText,compNameStyle,locationStyle,
                cardStyle,cardImageStyle,cardDescriptionStyle,textStyle
        }=styles

        return(
            
            <View style={wrapperStyle}>
                <View style={headerContainer}>
                  <Text style={headerText}>
                  You Deserve the best,Please give us some ratins so that we cab 
                   now what toserver you better
                  </Text>
                </View>
                <View style={cardStyle}>
                   <View style={cardImageStyle}>
                   <ImageBackground source={image} 
                                    style={{
                                        alignItems:'center',justifyContent:'center',
                                        width:'100%',height:'100%'}}
                                    >
                      <Text style={compNameStyle}>One Love Salon</Text>
                      <Text style={locationStyle}>Nyamirambo</Text>
                   </ImageBackground>
                   </View>
                   <View style={cardDescriptionStyle}>
                      <Text style={textStyle}>How did you like our Service?</Text>
                      <Text style={textStyle}>How did you like our Price?</Text>
                      <Text style={textStyle}>How did you like our Working Place?</Text>
                   </View>
                </View>
                <View style={{
                    alignItems:'center', justifyContent:'center',
                    display:'flex',
                     top:Platform.OS === 'ios' ? -80: -60, 
                     zIndex:1
                    }}>
                 <TouchableOpacity 
                      onPress={this.onSubmitRatings}
                      style={styles.ButtonStyle}>
                 <Text style={styles.buttonText}>Submit Ratings</Text>
              </TouchableOpacity>
            </View>
            </View>
            
        )
       
    }
}

const styles =StyleSheet.create({
   
      wrapperStyle:{
        display:'flex',
        flex:1,
        paddingTop:5,
        alignItems:'center',
        backgroundColor:colors.gray  
    },
    headerContainer:{
        display:'flex',
        flexWrap:'wrap',
        padding:Platform.OS === 'ios' ?20: 15,
        backgroundColor:colors.white,
        marginBottom:Platform.OS === 'ios' ? 20 : 15,
    },

    

    headerText:{
        fontSize:Platform.OS === 'ios' ? 17 : 14,
        fontWeight:Platform.OS === 'ios' ? '400' : '300',
        color:colors.black01,
        marginBottom:Platform.OS === 'ios' ? 10 : 7,
    },

    cardStyle:{
      display:'flex',
      borderWidth:1,
      borderRadius:5,
      borderColor:colors.gray02,
      shadowColor: colors.gray02,
      shadowOffset: { height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 5,
      marginLeft:Platform.OS === 'ios' ? 20: 15,
      marginRight:Platform.OS === 'ios' ? 20 : 15,
      width:Platform.OS === 'ios' ? 350: 350,
      height:Platform.OS === 'ios' ? 400 : 300,
      top:Platform.OS === 'ios' ? -50 : -40,
      zIndex:-1,
      backgroundColor:colors.white
    },
    cardImageStyle:{
        display:'flex',
        height:Platform.OS === 'ios' ? 220 : 180,
    },

    compNameStyle:{
        color:colors.white,
        fontSize:Platform.OS === 'ios' ? 20 : 15,
        fontWeight:Platform.OS === 'ios' ? '700': '600'
    },
    locationStyle:{
        color:colors.white,
        fontSize:Platform.OS === 'ios' ? 18 : 13,
        fontWeight:Platform.OS === 'ios' ? '600' : '500'
    },
    cardDescriptionStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:Platform.OS === 'ios' ? 15: 10
    },
    textStyle:{
        color:colors.black01,
        fontSize:Platform.OS === 'ios' ? 15 : 12,
        fontWeight:Platform.OS === 'ios' ? '500' : '400',
        marginBottom:Platform.OS === 'ios' ? 10: 7,
    },

    
    ButtonStyle:{
        display:'flex',
        backgroundColor:colors.blue01,
        alignItems:'center',
        justifyContent:'center',
        width:Platform.OS === 'ios' ? 250 : 200,
        padding:10,
        height:Platform.OS === 'ios' ? 50: 40,
        borderRadius:5
    },
   buttonText:{
      color:colors.white,
      fontSize:Platform.OS === 'ios' ? 20 : 15,
      fontWeight:Platform.OS === 'ios' ? '600':'500'
  }

})
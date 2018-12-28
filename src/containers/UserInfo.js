import React from 'react'
import {View, Text, StyleSheet,TextInput,Image,KeyboardAvoidingView,Platform} from 'react-native'
import colors from '../styles/colors'
import {connect} from 'react-redux'
import {getClientById} from '../redux/actions'

class UserInfo extends React.Component{

    componentDidMount(){
        const clientId=4
        this.props.getClientById(clientId)
    }
    render(){
        console.log(this.props.currentUser)
        const {wrapperStyle,}=styles
        return(
            <View style={wrapperStyle}>

         <KeyboardAvoidingView style={styles.infoWrapper}>
          <Text style={styles.label}>First Name</Text>
         <TextInput style={styles.inputField}
                  placeholder="John"
                  placeholderTextColor="#212F3D"
                  />

         <Text style={styles.label}>Last Name</Text>
         <TextInput style={styles.inputField}
                  placeholder="Doe"
                  placeholderTextColor="#212F3D"
                  />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.inputField}
                  placeholder="078453223"
                  placeholderTextColor="#212F3D"
                  />

           <Text style={styles.label}>Email</Text>
          <TextInput style={styles.inputField}
                  placeholder="johnDoe@deo.com"
                  placeholderTextColor="#212F3D"
                  />
         </KeyboardAvoidingView>
            </View>
        )
    }
}
 function mapStateToProps({user}){
     const {currentUser}=user
     return{
         currentUser
     }
 }

export default connect(mapStateToProps,{getClientById})(UserInfo)

const styles= StyleSheet.create({
    wrapperStyle:{
        display:'flex',
        
    },
    iconWrapper:{
        width:Platform.OS === 'ios' ? 90: 60,
        height:Platform.OS === 'ios' ? 90: 60,
        marginBottom:Platform.OS === 'ios' ? 20: 15,
        borderRadius:Platform.OS === 'ios' ? 90: 60,
        backgroundColor:'#fff',
        shadowColor: '#000000',
        shadowOffset: { height: 2},
        shadowOpacity: 0.8,
        shadowRadius: Platform.OS === 'ios' ? 5:4,
       
        borderColor:colors.white,
        alignItems:'center',
        justifyContent:'center'
    },
    infoWrapper:{
        display:'flex',
        marginTop:Platform.OS === 'ios' ? 15 : 10,
       
        paddingRight:10,
        paddingLeft:10,
        paddingTop:10,
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.gray01
    },
     inputField:{
       flexGrow:1,
       display: 'flex',
       flexDirection:'row',
     backgroundColor: '#F2F4F4',
     borderRadius: 4,
     fontWeight:Platform.OS === 'ios' ? '600': '500',
     height:Platform.OS === 'ios' ? 32: 27,
     paddingLeft:Platform.OS === 'ios' ?30 : 25,
     paddingRight:Platform.OS === 'ios' ? 30 : 25,
     marginLeft:Platform.OS === 'ios' ? 30: 25,
     marginRight:Platform.OS === 'ios' ? 30: 25,
     marginBottom:10,
     fontSize:Platform.OS === 'ios' ? 16: 13,
   },
   label:{
       fontSize:Platform.OS === 'ios' ? 18: 14,
       fontWeight:Platform.OS === 'ios' ? '600': '500',
       color:'#000',
       marginLeft:Platform.OS === 'ios' ? 30: 25,
       marginRight:Platform.OS === 'ios' ? 30: 25,
       marginBottom:Platform.OS === 'ios' ? 10: 5,
   }
})
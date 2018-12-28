import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { View,StyleSheet,Platform,ScrollView,Text,ActivityIndicator } from 'react-native'
import colors from '../../../styles/colors'
import {connect} from 'react-redux'
import FlatList from '../../../components/home/FLatList'


 class SearchResultsScreen extends React.Component{
  
    constructor(props){
        super(props)
        this.state={
            loadingVisible:false
        }
    }

    componentDidMount(){
        this.setState({ loadingVisible: true });

        setTimeout(() => {
              this.setState({ loadingVisible: false });
               
          }, 500);
    }
    viewShop(id){
        this.props.navigation.navigate('SingleShop',{
            branchId:id
        })
    }
    
    // renderResults(){
    //     const{resultSearch}=this.props
    
    //      if(resultSearch){
    //          if(resultSearch ===0 ){
    //              return(
    //             <View style={{
    //                 display:'flex',flex:1,
    //                 backgroundColor:colors.white,
    //                 alignItems:'center',
    //                 justifyContent:'center'
    //               }}>
    //             <Text style={{
    //                colors:colors.black01,
    //                fontSize:30,
    //                fontWeight:'600'
    //              }}>
    //                  No search related
    //              </Text>
    //         </View> 
    //              )
    //          }
             
    //          } 

          
    //  }

    render(){
        const {wrapperStyle ,containerStyle} = styles
        const{resultSearch}=this.props
        
        return(
           <View style={wrapperStyle}>  
              <ScrollView contentContainerStyle={containerStyle}>
              
                   {
                       this.state.loadingVisible ?
                       <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                             <ActivityIndicator color={colors.blue01} size={'large'}/>
                         </View>
                       :
                       <View>
                                {
                                    resultSearch.map((result,i) => {
                                        return(
                                            <View style={styles.singleContainer} key={i}>
                                                <FlatList handlePress={this.viewShop.bind(this,result.branchId)}
                                                    title={result.shopName}
                                                    image={result.profilePicture}
                                                    location={result.locationName}
                                                   />
                                            </View>
                                        )
                                    })
                                }
                        </View>
                   }
             </ScrollView>
           </View>
        
        )
    }
}

 
function mapStateToProps({search}){
    const { error, loading,resultSearch }=search
    return{
        error,loading,resultSearch
    }
 } 
 
 export default connect(mapStateToProps, {})(SearchResultsScreen)

const styles =StyleSheet.create({
    wrapperStyle:{
     display:'flex',
     flex:1, 
     backgroundColor:colors.gray03,
     
    },
    containerStyle:{
        display:'flex',
        flex:1,
        backgroundColor:'transparent',
        paddingTop:Platform.OS === 'ios' ? 30 : 25,
        paddingBottom:Platform.OS === 'ios' ? 15 : 13
     },
    singleContainer:{
        display:'flex',
        marginTop:10,
        backgroundColor:colors.black01,
        marginBottom:10
    }

})
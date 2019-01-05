import React from 'react'
import {FontAwesome,Ionicons} from '@expo/vector-icons'
import { View,StyleSheet,Platform,ScrollView,Text,ActivityIndicator,ProgressViewIOS } from 'react-native'
import colors from '../../../styles/colors'
import {connect} from 'react-redux'
import FlatList from '../../../components/home/FLatList'
import RoundedButton from '../../../components/buttons/RoundedButton'

 class SearchResultsScreen extends React.Component{

    static navigationOptions=({navigation})=>{
        const { title } = navigation.state.params
        return {
        title,
        headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                                 handlePress={()=>{navigation.goBack()}} icon={<FontAwesome name="angle-left" size={35} color={colors.white}/>}/>,
        headerStyle:{
            backgroundColor:colors.primary,
            elevation:4,
            borderBottomWidth:0,
            shadowColor: colors.gray01,
            shadowOffset: { height: 2},
            shadowOpacity: 0.4,
            shadowRadius: 5,

        },
        headerTitleStyle:{
            fontWeight:'500',
            fontSize:20,
             color:colors.white
        },
        gesturesEnables:false
    }}

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

    renderEmpty(){
        return(
            <View style={{
                display:'flex',
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}>
               <FontAwesome name='shopping-cart' size={50} color={colors.black02}/>
            </View>
        )
    }

    render(){
        const {wrapperStyle ,containerStyle} = styles
        const{resultSearch}=this.props
        console.log(resultSearch)
        return(
           <View  style={wrapperStyle}>  
               {
                  this.state.loadingVisible ?  
                       <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                           <ActivityIndicator color={colors.blue01} size={'large'}/>
                       </View>

                          :
                    
                    <ScrollView contentContainerStyle={containerStyle}>
                      {resultSearch.length===0 ? <View>{this.renderEmpty()}</View>
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
             }
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
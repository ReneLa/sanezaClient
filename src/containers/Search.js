import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {
    View,StyleSheet,Text,Picker,
    TextInput,TouchableOpacity,Platform
} from 'react-native'
import colors from '../styles/colors'
import {connect} from 'react-redux'
import {searchUpdate,searchTextChanged,getAllServicesByLocationIdAndCatId,
        getBranchByLocationName,getBranchByShopName} from '../redux/actions'
import SearchContainer from './SearchContainer'
import Button from '../components/buttons/Button'



 class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            day:'',
            isFocused:false,
            visible:true
            
        }
    }

  
    onCancelSearch(){
        this.props.navigation.goBack();
    }

    handleInputFocus = () => this.setState({ isFocused: true })

    handleInputBlur = () => this.setState({ isFocused: false })

    getShopsSearch=()=>{
        const {service,sector,getAllServicesByLocationIdAndCatId,navigation}=this.props

         getAllServicesByLocationIdAndCatId(410,1)

         navigation.navigate('SearchResults',{
             title:'Search Results'
         }) 
        
    }

    onSearchPress(){
        const {searchText,getBranchByShopName,navigation}=this.props

        getBranchByShopName(searchText)
        navigation.navigate('SearchResults',{
            title:'Search Results'
        })
    }

    renderSearchFields(){
      
        return(
            <View style={{flex:1,display:'flex'}}>
            <SearchContainer/>
            <View style={{display:'flex',alignItems:'center', paddingBottom:30,paddingTop:10}}>
              <Button 
                  label={'Get Services'}
                  textSize={Platform.OS === 'ios' ? 22  : 18}
                  textColor={colors.white}
                   handlePress={this.getShopsSearch}
                  customStyle={{
                      backgroundColor:colors.primary,
                      width:250,
                      height:60,
                      marginTop:20,
                      borderRadius:4
                     
                     }}
             />   
            </View>
            </View>
        )
    }


    render(){
        const {wrapperStyle,headerContainerStyle,searchButtonStyle,
            searchInputWrapperStyle,cancelButtonWrapper,searchButtonText,
             cancelStyle,inputStyle,searchBoxStyle,searchIconStyle,
             searchContainerStyle
        } = styles

        return(
           <View style={wrapperStyle}>
               <View style={headerContainerStyle}>
                  <View style={searchInputWrapperStyle}>
                  <View style={searchBoxStyle}>
                     
                      <TextInput
                         onFocus={this.handleInputFocus} 
                         onBlur={this.handleInputBlur} 
                         autoCorrect={false}
                         selectionColor={colors.blue01}
                         placeholder={"search by service or location"}
                         placeholderTextSize={Platform.OS === 'ios' ? 18: 14}
                         value={this.props.searchText}
                         onChangeText={value=> this.props.searchUpdate({prop:'searchText',value})}
                         style={inputStyle}
                      />
                      
                      {
                          this.state.isFocused ? 
                          <TouchableOpacity style={searchIconStyle}
                                onPress={this.onSearchPress.bind(this)}
                            >
                                <Ionicons name="ios-search" size={20} color={colors.white} />
                          </TouchableOpacity> :

                           <TouchableOpacity style={searchIconStyle}
                           onPress={this.onCancelSearch.bind(this)}
                         >
                            <Text style={cancelStyle}>Cancel</Text>
                           </TouchableOpacity>    
                      }
                    
                       
                  </View>
                  </View>
               </View>
             
                 <View style={{flex:1,display:'flex'}}>
                    {this.renderSearchFields()}
 
                </View>     
                  
           </View>
        )
    }
}
function mapStateToProps({search}){
    const {error, loading, searchText,service,sector,resultSearch,
         }=search
    return{
        error,loading, searchText,service,sector,resultSearch
    }
 } 
 
 export default connect(mapStateToProps,
     {
        getBranchByShopName,
        getBranchByLocationName,
         searchUpdate,
         searchTextChanged,
         getAllServicesByLocationIdAndCatId
     })(Search)

const styles =StyleSheet.create({
    wrapperStyle:{
     display:'flex',
     flex:1, 

     
    },
    headerContainerStyle:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:colors.primary,
        paddingTop:Platform.OS === 'ios' ? 20: 15,
        height:Platform.OS === 'ios' ? 70: 90,
    },
    searchInputWrapperStyle:{
        display:'flex',
        flex:2,
        padding:Platform.OS === 'ios' ? 10: 30,
    },
    searchBoxStyle:{
         height:Platform.OS === 'ios' ? 35:34,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:colors.gray,
        backgroundColor:colors.white,
        borderRadius:2
    },
    searchIconStyle:{
        // flex:1,
        // marginLeft:Platform.OS === 'ios' ? 10:7,
        // top:7 ,
        // marginRight:5
        display:'flex',
        flex:0.5,
        alignItems:'center',
        justifyContent:'center',
        borderLeftWidth:1,
        borderLeftColor:colors.black01,
        backgroundColor:colors.blue01

    },
    inputStyle:{
        color:colors.black01,
        fontWeight:'400',
        paddingLeft:5,
        marginTop:5,
        marginBottom:5,
        paddingRight:5,
        fontSize:Platform.OS === 'ios' ? 16: 15,
        lineHeight:Platform.OS === 'ios' ? 20: 18,
        flex:2
    },
    cancelButtonWrapper:{
        display:'flex',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
    },
    cancelStyle:{
        fontSize:Platform.OS === 'ios' ? 18: 13,
        fontWeight:'500',
        color:colors.white,
    },
   
    searchButtonStyle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.blue01,
        padding:5,
        top:3,
        height:35,
        borderRadius:4
    },
    searchButtonText:{
        color:colors.white,
        fontSize:17,
        fontWeight:'400'
    }

})
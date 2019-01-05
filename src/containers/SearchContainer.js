import React from 'react'
import {FontAwesome,EvilIcons} from '@expo/vector-icons'
import {View, StyleSheet,Text, Platform,
    Picker, TouchableOpacity} from 'react-native'

import colors from '../styles/colors'

import {connect} from 'react-redux'
import {searchUpdate,getAllProvinces,
        getDistrictsInProvince,getSectorsInDistrict,
        getAllServices
    } from '../redux/actions'
import PickerModal from '../components/common/PickerModal'
import Button from '../components/buttons/Button'
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';


 class SearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            day:'select province',
            pickService:false,
            pickProvince:false,
            pickDistrict:false,
            pickSector:false,
            serviceLabel:'--All Services',
            provinceLabel:'--All-Provinces--',
            districtLabel:'--All-Districts--',
            sectorLabel:'--All-Secctor--',
            visible:false
        }

    }

   
   
    choseService(){
        this.props.getAllServices();
        console.log(this.props.allServices)
        this.setState({
            pickService:true,
            visible:true
        })
    }

    doneServicePick(id){
        this.setState({
            visible:false,
            pickService:false,
            serviceSet:id
        })
    }
    choseProvince(){
        this.props.getAllProvinces();
        this.setState({
            pickProvince:true,
            visible:true
        })
    }

    doneProvincePick=(id)=>{
        this.setState({
            provinceSet:id,
            pickProvince:false,
            visible:false
            // pickDistrict:false,
            // pickSector:false
        })

    }
    choseDistrict(){
        this.props.getDistrictsInProvince(this.props.province);
        this.setState({
            pickDistrict:true,
            visible:true
        })
    }

    doneDistrictPick=(id)=>{
        this.setState({
            districtSet:id,
            pickDistrict:false,
        })
    }

    choseSector(){
        this.props.getSectorsInDistrict(this.props.district);
        this.setState({
            pickSector:true,
            visible:true
        })
    }
    doneSectorPick=(id)=>{
        this.setState({
            sectorSet:id,
            pickSector:false,
        })
    }
   
    labelChange=(prop,value)=>{
        const {allServices,allProvinces,districtsInProvince,sectorsInDistrict, searchUpdate}=this.props

        if(prop === 'service'){
            searchUpdate({prop,value})
        
            allServices.map( service =>{
            if( value === service.categoryId){
              this.setState({
              serviceLabel: service.name,
             })
   
             
            }
           })
        }

        else if(prop === 'province'){
            searchUpdate({prop,value})
        
            allProvinces.map( prov =>{
            if( value === prov.provinceId){
              this.setState({
              provinceLabel: prov.locationName,
             })
   
             
            }
           })
        }

        else if(prop === 'district'){
            searchUpdate({prop,value})
        
            districtsInProvince.map( dist =>{
            if( value === dist.districtId){
              this.setState({
              districtLabel: dist.locationName,
             })    
            }
           })
        }

        else if(prop === 'sector'){
            searchUpdate({prop,value})
        
            sectorsInDistrict.map(sect =>{
            if( value === sect.locationId){
              this.setState({
              sectorLabel: sect.locationName
             }) 
            }
           })
        }
      
       }


    renderPicker(){
        const {allServices,allProvinces,
            districtsInProvince,sectorsInDistrict,searchUpdate,
            service,district,province,sector
        } = this.props

        if(this.state.pickService){           
            return(
                <PickerModal 
                  modalVisible={this.state.visible}
                  onClose={this.doneServicePick.bind(this,service)}  
                  picker={
                   <Picker
                    style={{width:'100%',height:'100%'}}
                     selectedValue={service}
                     onValueChange={value => this.labelChange('service',value)}  
                  >
                     {allServices.map((service,i) =>{
                      return(
                        <Picker.Item key={service.categoryId} label={service.name} value={service.categoryId} />
                     )
                      })}  
             </Picker>
              }
              />
            )
        }

        if(this.state.pickProvince){
            
            return(
                <PickerModal modalVisible={this.state.visible}
                      onClose={this.doneProvincePick.bind(this,province)}  
                      picker={
                        <Picker
                        style={{height:'100%',width:'100%'}}
                        selectedValue={province}
                        onValueChange={value => this.labelChange('province',value)} 
                         >
                           {allProvinces.map((prov,i) =>{
                            return(
                               <Picker.Item key={i} label={prov.locationName} value={prov.provinceId} />
               
                            )
                           })}  
                       </Picker>
                      }
                 />
                 
            )
        }


        if(this.state.pickDistrict){
            return(
                <PickerModal modalVisible={this.state.visible}
                onClose={this.doneDistrictPick.bind(this,province)}  
                picker={
                    <Picker
                       style={{
                            display:this.state.pickDistrict?'flex':'none',
                            width:'100%',height:'100%'
                         }}
                     selectedValue={district}
                     onValueChange={value => this.labelChange('district',value)} 
                       >
                          {districtsInProvince.map((dist,i) =>{
                              return(
                                 <Picker.Item key={i} label={dist.locationName} value={dist.districtId} />
                           )
                         })}  
                     </Picker>
                   }
                     />
               
            )
        }


        if(this.state.pickSector){
            return(
                <PickerModal modalVisible={this.state.visible}
                onClose={this.doneSectorPick.bind(this,province)}  
                picker={
                   <Picker
                         style={{width:'100%',height:'100%'}}
                         selectedValue={sector}
                         onValueChange={value => this.labelChange('sector',value)} 
                       >
                          {sectorsInDistrict.map((sect,i) =>{
                            return(
                              <Picker.Item key={i} label={sect.locationName} value={sect.locationId} />
                      )
                       })}  
                    </Picker>
                   }
                />
            )
        }
    }

    render(){
        const {wrapperStyle,containerStyle,iconWapperStyle,
            searchButtonStyle,labelWrapperStyle, labelStyle} =  styles
         
        const {serviceLabel, provinceLabel, districtLabel, sectorLabel}=this.state   
        return(
             <View style={wrapperStyle}>
                <View style={containerStyle}>
                    <TouchableOpacity onPress={this.choseService.bind(this)} style={searchButtonStyle}>
                      <View style={labelWrapperStyle}>
                           <Text style={labelStyle}>{serviceLabel}</Text> 
                      </View>
                      <View style={iconWapperStyle}>
                           <EvilIcons name='arrow-down' size={35} color={colors.black01}/>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.choseProvince.bind(this)} style={searchButtonStyle}>
                      <View style={labelWrapperStyle}>
                           <Text style={labelStyle}>{provinceLabel}</Text> 
                      </View>
                      <View style={iconWapperStyle}>
                           <EvilIcons name='arrow-down' size={35} color={colors.black01}/>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.choseDistrict.bind(this)} style={searchButtonStyle}>
                      <View style={labelWrapperStyle}>
                           <Text style={labelStyle}>{districtLabel}</Text> 
                      </View>
                      <View style={iconWapperStyle}>
                           <EvilIcons name='arrow-down' size={35} color={colors.black01}/>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.choseSector.bind(this)}  style={searchButtonStyle}>
                      <View style={labelWrapperStyle}>
                           <Text style={labelStyle}>{sectorLabel}</Text> 
                      </View>
                      <View style={iconWapperStyle}>
                           <EvilIcons name='arrow-down' size={35} color={colors.black01}/>
                      </View>
                    </TouchableOpacity>
                
                </View>
               {this.renderPicker()}      
             </View>
        )
    }
}

function mapStateToProps({search}){
   const {error, loading, service,
           province,district,sector,
           districtsInProvince,allProvinces,
           sectorsInDistrict,allServices
        }=search
   return{
       error,loading, service,province,
       district,sector,
       districtsInProvince,allProvinces,
       sectorsInDistrict,allServices
   }
} 

export default connect(mapStateToProps,
    {
        searchUpdate,
        getAllServices,
        getAllProvinces,
        getDistrictsInProvince,
        getSectorsInDistrict,
    })(SearchContainer)

   const styles=StyleSheet.create({
       

    wrapperStyle:{
       display:'flex',
       flex:1,
       backgroundColor:colors.gray02,
    //    borderColor:colors.black01,
    //    borderWidth:2
    },
    containerStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // paddingBottom:20,
        // paddingTop:40,
        // borderColor:'red',
        // borderWidth:2,
        margin:5,
        // backgroundColor:colors.blue01
    },
    searchButtonStyle:{
        display:'flex',
        height:50,
        width:wp('50%'),
        borderRadius:4,
        flexDirection:'row',
        borderColor:colors.white,
        backgroundColor:colors.white,
        borderWidth:1.5,
        marginTop:15,
        marginBottom:15
    },
    labelWrapperStyle:{
        display:'flex',
        flex:2,
        alignItems:'center',
        justifyContent:'center'
        
    },
    labelStyle:{
        color:colors.black01,
        fontSize:18,
        fontWeight:'300'
    },
    iconWapperStyle:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:5
    },
    
   })


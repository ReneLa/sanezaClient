import React, { Component } from 'react';
import {FontAwesome} from '@expo/vector-icons'

import {connect} from 'react-redux';
import {getShopProducts} from "../../redux/actions"

import { View,StyleSheet,Platform,
    ScrollView, Text} from 'react-native';   
import RoundedButton from '../../components/buttons/RoundedButton' 
import BottomContainer from '../../components/BottomContainer'
import Button from '../../components/buttons/Button'
import colors from '../../styles/colors'
import ProductCard from'../../components/common/ProductCard'
import ConfirmModal from '../../components/common/ConfirmModal'

const image1 = require('../../images/salon1.jpg')
const image2 = require('../../images/salon2.jpg')
const image3 = require('../../images/salon3.jpg')
const image4 = require('../../images/salon4.jpg')
const image5 = require('../../images/salon5.jpg')




class MakeOrdersScreen extends Component{
     
    static navigationOptions=({navigation})=>({
        title:"Saneza",
        headerLeft:<RoundedButton customStyle={{marginLeft:5,width:45,height:45}}
                                 handlePress={()=>{navigation.goBack()}} icon={<FontAwesome name="angle-left" size={35} color={colors.white}/>}/>,
        headerStyle:{
            backgroundColor:colors.primary,
            elevation:4,
            borderBottomWidth:0,
            shadowColor: '#000000',
            shadowOffset: { height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 5,

        },
        headerTitleStyle:{
            fontWeight:'700',
            fontSize:23,
             color:colors.white
        },
        gesturesEnables:false
    })

    constructor(props){
        super(props);
        this.state ={
            checked:false,
            loading:true,
            items:[1,2,3],
            isOrdered:false
        }
    
        this.onOrderConfirm=this.onOrderConfirm.bind(this)
    }
      
    
    componentDidMount(){
        const {branchId} = this.props.navigation.state.params
        this.props.getShopProducts(branchId);
    }

    openModal(){
        this.setState({isOrdered:true})
    }

    
   closeModal(){
     this.setState({isOrdered:false})
   }

   renderCategory(){
    const {categoryWrapperStyle,
            categoryHeaderStyle,itemContainerStyle,itemsWrapper} =styles
            const {shopProducts}=this.props
        if(shopProducts){
           return(
            shopProducts.map(Category =>{
                return(
                    <View style={categoryWrapperStyle} 
                           key={Category.categoryId}          
                           >
                        <Text style={categoryHeaderStyle}>{Category.name}</Text>
                        <View style={itemsWrapper}>
                            {this.renderProducts(Category.products)}
                        </View>
                    </View>
                )
            })
        )
    }
}

renderProducts(products){
    
         return(
            products.map(product =>{
                 return(
                     <ProductCard 
                            key={product.productId}
                            id={product.productId}
                            item={product}
                            image={product.image}
                            name={product.productName}
                            quantity={product.stock}
                            price={product.unitPrice} 
                            />
                 )
             })
         )
     }

    onOrderConfirm(){
        this.closeModal();
        const {navigate}=this.props.navigation
         navigate('Completed')
    }
   
  render(){
    //   console.log(this.props.shopProducts)
            const itemQty = this.state.items.length;
            const {selected,loading,items,isOrdered} =this.state
            const showBottomNav = items.length > 0 ? true : false
            const visible= isOrdered? true: false
        return(
        <View style={styles.wrapper}>
         <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.headerWrapper}>
              <Text style={styles.headerText}>Make Orders</Text>
          </View>
            <View style={styles.itemsWrapper}>
            {this.renderCategory()}
           </View>
           
        </ScrollView>
          <ConfirmModal
                 modalVisible={visible}
                 firstLine="Successfully Ordered"
                 secondLine="We like our Clients"
                 onClose={this.onOrderConfirm.bind(this)}
            />
            <BottomContainer 
               showBottomNav={true}
               textContainer={
                   <View style={{backgroundColor:'transparent',padding:15,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{
                           fontSize:18,color:'#fff'}}> {'Products Selected: '+ itemQty} </Text>
                       <Text style={{fontSize:25,color:'#fff',fontWeight:'bold'}}>{"2000 rwf"}</Text>
                   </View>}
               buttonTwo={<Button handlePress={this.openModal.bind(this)}
               label="Order Now"
               textSize={22}
               textColor={colors.black01}
               customStyle={{backgroundColor:colors.gray03,borderRadius:2}}/>}
                   customStyle={{position:'absolute',height:75,backgroundColor:colors.primary,display:'flex',width:'100%',flex:1}}
                   />   
          </View>
        )
       
    }
}

function mapStateToProps({shop}){
    const {error,loading,shopProducts} = shop
    return {
       error,loading, shopProducts
    }
}

export default connect(mapStateToProps,{getShopProducts})(MakeOrdersScreen)

const styles =StyleSheet.create({
    
    wrapper:{
        display:'flex',
        flex:1, 
        backgroundColor:colors.gray01,
    },
    scrollView:{
        display:'flex',
        flex:1,
    },
    headerWrapper:{
        display:'flex',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,
    

    },
     
    headerText:{
        fontSize:25,
        color:colors.black01,
        fontWeight:'500',
        marginTop:20,
        marginBottom:10,
    },
    itemsWrapper:{
        marginTop:10,
        // flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        
     },  
     categoryWrapperStyle:{
        display:'flex',
        padding:10
    },
    categoryHeaderStyle:{
        color:colors.black01,
        fontSize:Platform.OS === 'ios' ? 23:17,
        fontWeight:Platform.OS === 'ios' ? '600':'500',
        marginTop:5,
        marginBottom:5
    },
    itemContainerStyle:{
        display:'flex',
        marginLeft:10,
        marginRight:10
    }
})


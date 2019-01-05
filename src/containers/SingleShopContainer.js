import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import {FontAwesome,MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import { View,StyleSheet,ScrollView,Image,Animated,Platform,
         ActivityIndicator,Text,Dimensions} from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton'
import BottomContainer from '../components/BottomContainer'
// import Button from '../components/buttons/Button'
import {connect} from 'react-redux';
import {getSingleShop} from "../redux/actions"
import colors from '../styles/colors'
import { 
    widthPercentageToDP as wp, heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
const image1=require('../images/salon4.jpg')
const image2 = require('../images/salon3.jpg')
const image3 = require('../images/salon5.jpg')
const image4 = require('../images/salon1.jpg')
import {ButtonWithIcon} from '../components/buttons/ButtonWithIcon'
const imagesArr= [image1,image2,image3,image4]

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10


 class SingleShopContainer extends Component{


    numItems = imagesArr.length
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)


    constructor(props){
        super(props);
        this.state={
            loading:false
        }
        // this.onOrderProducts=this.onOrderProducts.bind(this)
        this.onLike=this.onLike.bind(this)
    }
    
    componentDidMount(){
        const {branchId} = this.props.navigation.state.params
        this.props.getSingleShop(branchId);

        this.setState({ loading: true });

        setTimeout(() => {
              this.setState({ loading: false });
               
          }, 500);
    }

    onLike(){
        alert('likes this company')
    }
    onBookService(id){
        const {singleShop}=this.props
        const {shop}=this.props.singleShop
        const shopname= singleShop ? shop.shopName : ''

        const {navigation} = this.props
        
        // navigation.setParams({me: "rene"})

        navigation.navigate('BookService',{
                   branchId:id,
                   shopName:shopname,
                   shopLocation:singleShop.locationName
        });
    }
    onOrderProducts(id){
       
        const {singleShop}=this.props
        const {shop}=this.props.singleShop
        const shopname= singleShop ? shop.shopName : ''
        const {navigate} = this.props.navigation;
        
        navigate('MakeOrders',{
            branchId:id,
            shopName:shopname,
            shopLocation:singleShop.locationName
        });
    }
    render(){
        
        let imageArray = []
        let barArray = []
        imagesArr.forEach((image,i)=>{

            const thisImage=(
                <Image key={`image${i}`} source={image} style={{ width: deviceWidth,height:'100%' }} />

            )

            imageArray.push(thisImage)

            const scrollBarVal = this.animVal.interpolate({
                inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
                outputRange: [-this.itemWidth, this.itemWidth],
                extrapolate: 'clamp',
            })

            const thisBar = (
                <View
                    key={`bar${i}`}
                    style={[
                        styles.track,
                        {
                            width: this.itemWidth,
                            marginLeft: i === 0 ? 0 : BAR_SPACE,
                        },
                    ]}
                >
                    <Animated.View

                        style={[
                            styles.bar,
                            {
                                width: this.itemWidth,
                                transform: [
                                    { translateX: scrollBarVal },
                                ],
                            },
                        ]}
                    />
                </View>
            )
            barArray.push(thisBar)

        })
 
        const {singleShop}=this.props
        const {shop}=this.props.singleShop
        // console.log(singleShop.locationName,shop)
        
        return(
            <View style={styles.wrapper}>

                <ScrollView style={styles.scrollView}>

                    <View  style={{
                                    display:'flex',  
                                    height:hp('50%'),
                                     alignItems:'center',
                       }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={10}
                            pagingEnabled
                            onScroll={
                                Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                                )
                            }
                        >

                            {imageArray}
                        </ScrollView>

                        <View
                            style={{ 
                                position: 'absolute',
                                bottom:80,
                                flexDirection: 'row',}}
                        >
                            {barArray}
                        </View>
                    </View>
                 

                    <RoundedButton
                        icon={<FontAwesome name="heart" size={25} color={colors.white}/>}
                        handlePress={this.onLike}
                        customStyle={{backgroundColor:colors.blue01,
                            height:45,width:45,borderRadius:45,
                            alignSelf:'flex-end',
                            borderWidth:1.5,
                            borderColor:colors.white,
                            shadowColor: colors.gray03,
                            shadowOffset: { height: 4},
                            shadowOpacity: 0.9,
                            shadowRadius: 4,
                            right:0,marginRight:20,top:-110}}/>


  
                    {this.state.loading ?  
                      <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                          <ActivityIndicator color={colors.blue01} size={'large'}/>
                      </View>   : 

                    <View style={styles.contentWrapper}>
                        <View style={styles.description}>

                           <View style={styles.headWrapperStyle}>
                              { singleShop  ? <Text style={[{fontSize:hp('3%'),fontWeight:'600'},styles.headTextStyle]}>{shop.shopName}</Text> : <Text>hey</Text>}
                               <Text style={[{fontSize:16,fontWeight:'500'},styles.headTextStyle]}>{singleShop.locationName}, {singleShop.streetName}</Text>
                           </View>

                           <View style={styles.infoWrapperStyle}>
                              <Text style={[{fontSize:hp('2.5%'),fontWeight:'600'},styles.headTextStyle]}>Open Days: </Text>
                              <Text style={[{fontSize:hp('2.5%'),fontWeight:'400'},styles.headTextStyle]}>{singleShop.openDays} </Text>
                           </View>
                           <View style={styles.infoWrapperStyle}>
                           { singleShop ? 
                            <Text style={[{fontSize:hp('2%'),fontWeight:'400',color:colors.black02}]}>
                                {shop.description}
                            </Text>  : <Text>hey</Text> }
                           </View>
                           
                        </View>
                    </View>
                 }  
               
               </ScrollView>

                <BottomContainer
                    showBottomNav={true}
                    buttonOne={<ButtonWithIcon handlePress={this.onBookService.bind(this,singleShop.branchId)}
                                       label="Book Service"
                                       textSize={hp('2.5%')}
                                       icon={
                                          <MaterialCommunityIcons 
                                                                  name="email-open-outline" size={hp('4%')} color={colors.blue01}/>}
                                       customStyle={{backgroundColor:colors.white,borderRadius:2}}
                    />}
                    buttonTwo={<ButtonWithIcon handlePress={this.onOrderProducts.bind(this,singleShop.branchId)}
                                       label="Order Products"
                                       textSize={hp('2.5%')}
                                       icon={
                                          <FontAwesome  
                                                       name="calendar-o" size={hp('4%')} color={colors.blue01}/>}
                                       textColor={'#2C3E50'}
                                       customStyle={{backgroundColor:colors.white,borderRadius:2}}
                    />}
                    customStyle={{height:hp('10%'),backgroundColor:colors.primary}}/>
            </View>
        )

    }
}


function mapStateToProps({shop}){
    const {error,loading,shops,singleShop} = shop
    return {
       error,loading, shops,singleShop
    }
}

export default connect(mapStateToProps,{getSingleShop}) (SingleShopContainer)


const styles =StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray03,

    },

    scrollView:{
        display:'flex',
        flex:1,
        backgroundColor:colors.gray01,
    },
    image:{
        width:'100%',
        height:hp('20%'),
        alignItems:'center',
        justifyContent:'center',
        paddingTop:Platform.OS === 'ios' ? 50: 40
    },
    inImage:{
        display:'flex',
        backgroundColor:'transparent',
        alignItems:'center',
        zIndex:2,
        top:Platform.OS === 'ios' ? -120 : -100,
    },
    compName:{
        fontSize:hp('3.5%'),
        color:colors.white,
        fontWeight:Platform.OS === 'ios' ? '500' :'400',
        marginBottom:Platform.OS === 'ios' ? 20 : 15,

    },
    locationText:{
        fontSize:hp('3.3%'),
        fontWeight:'bold',
        color:'#fff',
        marginBottom:15
    } ,   
     contentWrapper:{
        display:'flex',
        flex:1,
        height:'100%',
        top:-110,

    },

    description:{
        display:'flex',
        width:'100%',
        paddingTop:10,
        paddingBottom:Platform.OS === 'ios' ? 100 :80,
        backgroundColor:'#FDFEFE',
        // borderColor:'#566573',
        // borderWidth:1,

    },
    
    headWrapperStyle:{
        display:'flex',
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    headTextStyle:{
        color:colors.black02,
        marginBottom:10,
        
    },
    infoWrapperStyle:{
        display:'flex',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:15

    },
    text:{
        fontSize:hp('3%'),
        fontWeight:'400',
        color:colors.black02,

    },

    track: {
        backgroundColor: '#ccc',
        overflow: 'hidden',
        height: 2,
    },
    bar: {
        backgroundColor: '#5294d6',
        height: 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },

}) 
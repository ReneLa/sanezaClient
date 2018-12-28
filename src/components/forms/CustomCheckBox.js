import React from 'react'
import {connect} from 'react-redux'
import {addToCart,removeFromCart} from '../../redux/actions'
import {CheckBox} from 'react-native-elements'
import colors from '../../styles/colors'


 class CustomCheckbox extends React.Component {
    constructor() {
      super();
       this.state = {
        checked: false,
      };
    }

     render() {
      const { id,customStyle,toggle,checked} = this.props;
      
       return (
        <CheckBox
          key={id}
          containerStyle={[{borderColor:'transparent', borderWidth:0, backgroundColor:'transparent'},customStyle]}
          center
          iconType='material'
          size={35}
          checkedIcon='check-circle'
          uncheckedIcon='check-box-outline-blank'
          checkedColor={colors.blue01}
          uncheckedColor={colors.gray}
          checked={checked}
          onPress={toggle}
        />
      );
    }
  }

function mapStateToProps({cart}){
   const {byId,byHash}= cart
   return{
     byId,byHash
   }
}

export default connect(mapStateToProps, {addToCart,removeFromCart})(CustomCheckbox)
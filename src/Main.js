import React from "react";
import { createRootNavigator } from "./navigators/AppRouteConfigs";
import { isSignedIn } from "./auth";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            signedIn:false,
            checkedSignIn:false
        };
    }

    componentDidMount(){
        isSignedIn()
            .then((res) => {  
                    this.setState({signedIn:res,checkedSignIn:true}) 
        })
    }
   

    render() {
        const { checkedSignIn, signedIn } = this.state;
         
        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedSignIn) {
            return null;
        }

        const Layout = createRootNavigator(signedIn);
       return(
           <Layout/>
       )
              
    }
}

export default Main
import React from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import { createLogger }  from 'redux-logger'
import thunk from 'redux-thunk';
import Main from './src/Main'
import reducers from './src/redux/reducers'

console.disableYellowBox=true;

const loggerMiddleware = createLogger({ predicate: () => __DEV__ })
const middleware = applyMiddleware(thunk,loggerMiddleware);

const store = createStore(reducers,{},middleware);


class App extends React.Component {
    render() {
        return(
         <Provider store={store}>
              <Main/>
          </Provider>
        )
    }
}

AppRegistry.registerComponent('App', () => App);

export default App;
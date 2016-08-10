import React, {Component} from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RouterHome from './layouts/RouterHome';


const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterHome/>
            </Provider>
        );
    }
}


export default App;

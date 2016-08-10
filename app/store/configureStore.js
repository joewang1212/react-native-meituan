import { createStore, applyMiddleware,compose } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import {Platform} from 'react-native';


export default function configureStore(initialState) {

    const enhancer = compose(
        applyMiddleware(thunk),
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        })
    );
    return createStore(reducer, initialState, enhancer);

    return store;
};
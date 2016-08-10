import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    Scene,Router
} from 'react-native-router-flux';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

class RouterHome extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
                    <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
                </Scene>
            </Router>
        );
    }
}

export default RouterHome;
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux';
import store from './store';
import Routes from './Routes';

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>

    )

export default App;

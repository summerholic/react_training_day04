import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import UserList from './containers/UserListContainer';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from = '/' to='/users' />
            <Route exact path='/users' component={UserList} />
        </Switch>
    </BrowserRouter>
)
export default Routes;
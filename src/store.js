import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import userListReducer from './reducers/UserListReducer';

const rootReducer = combineReducers({
    userListState : userListReducer, 
});
const composeEnhancers = compose;
const store = createStore (
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
const {dispatch} = store;
export default store;
export {dispatch};
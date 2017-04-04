import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import app                 from './app';

export default (state, action) => ({
    ...combineReducers({
        routing: routerReducer,
        app
    }).call(null, state, action),
});

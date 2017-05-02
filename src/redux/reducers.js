import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import app                 from './app';
import home                from './home';

export default (state, action) => ({
    ...combineReducers({
        routing: routerReducer,
        app,
        home,
    }).call(null, state, action),
});

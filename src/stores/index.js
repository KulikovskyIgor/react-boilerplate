import {createStore, applyMiddleware} from 'redux';
import thunk                          from 'redux-thunk';
import reducers                       from '../reducers';

/**
 * In order to save smth in localStore add code below
 *  import {save, load} from 'redux-localstorage-simple';
 * */

export default () => {

    /**
     * In order to save smth in localStore add code below to the middlewares list
     * save({namespace: 'project', states: ['app', '404page']})
     * */
    const middlewares = [thunk];

    if (process.env.NODE_ENV === 'development') {
        const createLogger = require('redux-logger');
        const logger = createLogger();
        middlewares.push(logger);
    }

    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

    /**
     * In order to load smth from localStore add code below to the createStoreWithMiddleware as second argument
     * load({namespace: 'project', states: ['app', '404page']})
     */
    const store = createStoreWithMiddleware(reducers);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};

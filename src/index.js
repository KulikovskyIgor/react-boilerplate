import 'core-js/fn/object/assign';
import React                                       from 'react';
import ReactDOM                                    from 'react-dom';
import {Provider}                                  from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App                                         from './components/app';
import HomePage                                    from './components/home-page';
import NotFoundPage                                from './components/not-found-page';

import configureStore                              from './stores';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="home" component={HomePage}/>
                <Route path="*" component={NotFoundPage}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));

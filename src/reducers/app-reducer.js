import * as AppConstants from '../constants/app.js';

const initSate = {
    test: null
};

export default function App(state = initSate, action) {
    switch (action.type) {
        case AppConstants.APP_SET_TEST:
            return Object.assign({}, state, {
                test: action.data
            });
        case AppConstants.APP_CLEAR:
            return initSate;
        default:
            return state;
    }
}

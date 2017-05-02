import { combineReducers }              from 'redux';
import constantsHelper                  from '../../utils/redux/constants-helper';
import actionsHelper                    from '../../utils/redux/actions-helper';
import reducerHelper                    from '../../utils/redux/reducer-helper';
import { reqReducer as sameAPIReducer } from './sameAPIRequest';

export const constants = constantsHelper('app', [
    'SET_TEST',
    'CLEAR',
]);

export const actions = actionsHelper(constants);

const initState = {
    test: null,
};

const homeReducer =  reducerHelper(initState, {
    [constants.SET_TEST]: (state, action) => {
        return {...state, test: action.payload}
    },

    [constants.CLEAR]: () => {
        return initState;
    },
});


export default combineReducers({
    home: homeReducer,
    sameAPIReducer,
})

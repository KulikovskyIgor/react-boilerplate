import constantsHelper from '../../utils/redux/constants-helper';
import actionsHelper   from '../../utils/redux/actions-helper';
import reducerHelper   from '../../utils/redux/reducer-helper';

export const constants = constantsHelper('app', [
    'SET_TEST',
    'CLEAR',
]);

export const actions = actionsHelper(constants);

const initState = {
    test: null,
};

export default reducerHelper(initState, {
    [constants.SET_TEST]: (state, action) => {
        return {...state, test: action.payload}
    },

    [constants.CLEAR]: () => {
        return initState;
    },
});

import reqConstantsHelper    from '../../utils/redux/req-constants-helper';
import actionsHelper         from '../../utils/redux/actions-helper';
import reqReducerHelper      from '../../utils/redux/req-reducer-helper';
import * as reqActionsHelper from '../../utils/redux/req-actions-hepler';

const reqConstants = reqConstantsHelper('home/same.api.request');
const reqActions = actionsHelper(reqConstants);
export const reqReducer = reqReducerHelper(reqConstants);

export const send = () => {
    return (dispatch) => {
        reqActionsHelper.send(dispatch, {
            url: 'https://jsonplaceholder.typicode.com/posts/2',
        }, reqActions);
    }
};

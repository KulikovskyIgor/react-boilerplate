import { createAction } from 'redux-actions';

export default function (constantsObject) {
    let actionsObject = {};

    Object.keys(constantsObject).forEach(key => {
        actionsObject[key] = createAction(constantsObject[key]);
    });

    return actionsObject;
}

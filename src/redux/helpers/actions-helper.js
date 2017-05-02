import { createAction } from 'redux-actions';

export default function (constantsObject) {
    let actionsObject = {};

    Object.keys(constantsObject).forEach(key => {
        Object.defineProperty(actionsObject, key, {
            value: createAction(constantsObject[key]),
            enumerable: true,
        });
    });

    return actionsObject;
}

import * as appConstants from '../constants/app';

export function SET_TEST(data){
    return {
        type: appConstants.APP_SET_TEST,
        data
    }
}

export function CLEAR(){
    return {
        type: appConstants.APP_CLEAR
    }
}

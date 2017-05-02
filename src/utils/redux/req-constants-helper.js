import constantsHelper from './constants-helper';

const REQUEST_CONSTS = [
    'SEND',
    'SUCCEED',
    'REJECTED',
    'ERROR_ENCOUNTERED'
];

export default (module) => constantsHelper(module, REQUEST_CONSTS);

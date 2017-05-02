export const initialState = {
    sending: false,
    succeed: null,
    rejected: null,
    error: null,
};

const createReqReducer = (consts) => (state = initialState, action) => {
    const { SEND, SUCCEED, REJECTED, ERROR_ENCOUNTERED } = consts;
    const { payload, type } = action;

    switch (type) {
        case SEND:
            return {
                ...initialState,
                sending: true,
            };
        case SUCCEED: {
            return Object.assign({},
                initialState,
                {
                    succeed: true,
                },
                Array.isArray(payload)
                    ? { list: payload }
                    : payload,
            );
        }
        case REJECTED:
            return {
                ...initialState,
                ...payload,
                rejected: true,
            };
        case ERROR_ENCOUNTERED:
            return {
                ...initialState,
                error: payload,
            };
        default:
            return state;
    }
};

export default createReqReducer;

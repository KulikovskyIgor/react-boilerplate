import camelize from 'camelize';

const defHttpConf = {
    url: '',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    body: null,
};

export const send = (dispatch, httpConf, actions) => {

    const conf = Object.assign({}, defHttpConf, httpConf);

    dispatch(actions.SEND());

    fetch(conf.url, {
        method: conf.method,
        headers: conf.headers,
        body: conf.body ? JSON.stringify(conf.body) : null,
    })
        .then(response => {
            const { status } = response;

            if (status >= 200 && status < 400) {
                response.json()
                    .then(data => {
                        const camelizedData = camelize(data);
                        dispatch(actions.SUCCEED(camelizedData));
                    })
            } else if (status >= 400 && status < 500) {
                dispatch(actions.REJECTED(response));
            } else {
                throw response;
            }

        })
        .catch((error) => {
            dispatch(actions.ERROR_ENCOUNTERED(error));
        });
};

import React, { PropTypes, Component } from 'react';
import { connect }                     from 'react-redux';

import { actions as appActions } from '../../redux/app';
import { send as sendSameRequest } from '../../redux/home/sameAPIRequest';

let yeomanImage = require('../../images/yeoman.png');

class HomePage extends Component {

    componentWillMount() {
        this.props.SET_TEST('demo text');

        this.props.sendSameRequest();
    }

    componentWillUnmount() {
        this.props.CLEAR();
    }

    render() {
        return (
            <div>
                <img src={yeomanImage} alt="Yeoman Generator"/>
                <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
                <h1> {this.props.test} </h1>
                <If condition={ true }>
                    <span>IfBlock</span>
                </If>
            </div>
        );
    }
}

HomePage.propTypes = {
    test: PropTypes.any,
    SET_TEST: PropTypes.func.isRequired,
    CLEAR: PropTypes.func.isRequired,
    sendSameRequest: PropTypes.func.isRequired,
};

const mapStateToPros = state => ({
    test: state.app.test,
    sameAPIReducer : state.home.sameAPIReducer,
});

const mapDispatchToProps = dispatch => ({
    SET_TEST: data => dispatch(appActions.SET_TEST(data)),
    CLEAR: () => dispatch(appActions.CLEAR()),
    sendSameRequest: () => dispatch(sendSameRequest()),
});

export default connect(mapStateToPros, mapDispatchToProps)(HomePage);

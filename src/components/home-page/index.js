import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import * as appActions from '../../actions/app-actions';

let yeomanImage = require('../../images/yeoman.png');

class HomePage extends Component {

    componentWillMount() {
        this.props.SET_TEST('demo text');
    }

    componentWillUnmount() {
        this.props.CLEAR();
    }

    render() {
        return (
            <div>
                <img src={yeomanImage} alt="Yeoman Generator"/>
                <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
            </div>
        );
    }
}

HomePage.propTypes = {
    test: PropTypes.any,
    SET_TEST: PropTypes.func.isRequired,
    CLEAR: PropTypes.func.isRequired
};

const mapStateToPros = state => ({
    test: state.app.test
});

const mapDispatchToProps = dispatch => ({
    SET_TEST: data => dispatch(appActions.SET_TEST(data)),
    CLEAR: () => dispatch(appActions.CLEAR())
});

export default connect(mapStateToPros, mapDispatchToProps)(HomePage);

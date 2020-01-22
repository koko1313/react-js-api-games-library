import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

/**
 * Expected parameters:
 * - [DESIGNS_ENUM] value
 * - [String] label
 */
class ChangeDesignButton extends Component {

    changeResultDesign = (e) => {
        this.props.setResultDesign(e.target.value);
    }

    render() {
        return (
            <button className="" onClick={this.changeResultDesign} value={this.props.value}>{this.props.label}</button>
        );
    }

}

const mapStateToProps = state => {
    return {
        resultDesign: state.resultDesign,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setResultDesign: actions.setResultDesign,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(ChangeDesignButton);
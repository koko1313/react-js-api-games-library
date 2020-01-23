import React, { Component } from 'react';
import './style.scss';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

/**
 * Expected parameters:
 * - [DESIGNS_ENUM] value
 * - [String] label - as children element
 */
class ChangeDesignButton extends Component {

    isActive = () => {
        if (this.props.value === this.props.resultDesign) {
            return "active";
        }
    }

    changeResultDesign = (e) => {
        this.props.setResultDesign(e.target.id);
    }

    render() {
        return (
            <button className={"btn result-design-button " + this.isActive()} onClick={this.changeResultDesign} id={this.props.value}> {this.props.children} </button>
            //<button className={"btn result-design-button " + this.isActive()} onClick={this.changeResultDesign} id={this.props.value}> {this.props.children} </button>
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
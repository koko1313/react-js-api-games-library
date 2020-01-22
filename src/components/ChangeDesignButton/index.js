import React, { Component } from 'react';
import DESIGNS_ENUM from '../GamesList/GameResultDesign/DESIGNS_ENUM';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class ChangeDesignButton extends Component {

    changeResultDesign = (e) => {
        this.props.setResultDesign(e.target.value);
    }

    render() {
        return (
            <>
            <button onClick={this.changeResultDesign} value={DESIGNS_ENUM.DESIGN_ROWS}>Rows</button>
            <button onClick={this.changeResultDesign} value={DESIGNS_ENUM.DESIGN_GRID}>Grid</button>
            </>
        )
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
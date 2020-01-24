import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class GameDetailsPage extends Component {

    componentDidMount = () => {
        const gameId = this.props.match.params.id;
        this.props.getGameDetails(gameId);
    }

    render() {
        return <>
            <div className="row">
                <div className="col">
                    <h1>{this.props.gameDetails.name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    ...
                </div>
            </div>
        </>
    }
}

const mapStateToProps = state => {
    return {
        gameDetails: state.gameDetails,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setGameDetails: actions.setGameDetails,
        getGameDetails: actions.getGameDetails,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(GameDetailsPage));
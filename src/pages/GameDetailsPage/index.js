import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import moment from 'moment';
import './style.scss';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class GameDetailsPage extends Component {

    componentDidMount = () => {
        const gameId = this.props.match.params.id;
        this.props.getGameDetails(gameId);
    }

    render() {
        const game = this.props.gameDetails;
        let cleanDescription = "";

        // remove html elements from the description
        if(game.description) {
            cleanDescription = game.description.replace(/(<([^>]+)>)/ig, "");
        }

        return <>
            <div className="game-description">
                <div className="rating pull-right">
                    <span className="badge badge-warning">{game.rating} / {game.rating_top}</span>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>{game.name}</h1>
                        <p>{moment(game.released).format('MMMM Do YYYY')}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <p>
                            <strong>Уеб сайт: </strong>
                            <em><a href={game.website}>{game.website}</a></em>
                        </p>
                        <p>
                            <strong>Описание: </strong>
                            <em>{cleanDescription}</em>
                        </p>
                    </div>

                    <div className="col-md">
                        <img className="img-fluid" src={game.background_image} alt={game.slug} />
                    </div>
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
import React, { Component } from 'react';
import './style.scss';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class GamesList extends Component {

    componentDidMount(){
        this.props.getGames();
    }

    getPlatformNamesAsString = (game) => {
        let platforms = [];
        game.parent_platforms.map((platform) => {
            platforms.push(platform.platform.name);
        });
        return platforms.join(", ");
    }

    getGenreNamesAsString = (game) => {
        let genres = [];
        game.genres.map((genre) => {
            genres.push(genre.name);
        });
        return genres.join(", ");
    }

    renderGames = () => {
        const games = this.props.games;
        const gameResults = games.map((game) => {
            return (
                <div key={game.id} className="row game-result py-3 my-3">
                    <div className="col-md-4">
                        <img className="img-fluid mb-3 mb-md-0" src={game.background_image} alt={game.slug}/>
                    </div>
                    <div className="col-md">
                        <h3>{game.name}</h3>
                        <span className="badge badge-warning rating">{game.rating} / {game.rating_top}</span>
                        <p>{game.released}</p>
                        <hr />
                        <p>Платформи: <span>{this.getPlatformNamesAsString(game)}</span></p>
                        <p>Жанрове: <span>{this.getGenreNamesAsString(game)}</span></p>
                    </div>
                </div>
            );
        });
        return gameResults;
    }

    render() {
        return this.renderGames();
    }

}

const mapStateToProps = state => {
    return {
        games: state.games,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setGames: actions.setGames,
        getGames: actions.getGames,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(GamesList);
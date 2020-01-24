import React from 'react';
import {withRouter} from "react-router-dom";
import moment from 'moment';
import BaseResult from '../BaseResult';

/**
 * Expected parameters:
 * - [JSON Array] games
 */
class DesignRows extends BaseResult {

    showGameDetails = (e) => {
        this.props.history.push(`/games/${e.target.id}`);
    }

    render() {
        const gameResults = this.props.games.map((game) => {
            return (
                <div key={game.id} id={game.id} className="container game-result py-3 my-3">
                    <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid mb-3 mb-md-0" src={game.background_image} alt={game.slug}/>
                    </div>
                    <div className="col-md">
                        <h3>{game.name}</h3>
                        <span className="badge badge-warning rating">{game.rating} / {game.rating_top}</span>
                        <p>{moment(game.released).format('MMMM Do YYYY')}</p>
                        <hr />
                        <p>Платформи: <span>{this.getPlatformNamesAsString(game)}</span></p>
                        <p>Жанрове: <span>{this.getGenreNamesAsString(game)}</span></p>
                        <button className="btn btn-primary" id={game.id} onClick={this.showGameDetails}>Прочети повече</button>
                    </div>
                    </div>
                </div>
            );
        });

        return gameResults;
    }

}

export default withRouter(DesignRows);
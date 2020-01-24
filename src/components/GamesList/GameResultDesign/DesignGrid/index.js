import React from 'react';
import {withRouter} from "react-router-dom";
import moment from 'moment';
import BaseResult from '../BaseResult';

/**
 * Expected parameters:
 * - [JSON Array] games
 */
class DesignGrid extends BaseResult {

    showGameDetails = (e) => {
        this.props.history.push(`/games/${e.target.id}`);
    }

    render() {
        const gameResults = this.props.games.map((game) => {
            return (
                <div key={game.id} className="card game-result m-2">
                    <div>
                        <img className="img-fluid mb-3" src={game.background_image} alt={game.slug}/>
                    </div>
                    <div className="card-body px-2">
                        <h3>{game.name}</h3>
                        <span className="badge badge-warning rating">{game.rating} / {game.rating_top}</span>
                        <p>{moment(game.released).format('MMMM Do YYYY')}</p>
                        <hr />
                        <p>Платформи: <span>{this.getPlatformNamesAsString(game)}</span></p>
                        <p>Жанрове: <span>{this.getGenreNamesAsString(game)}</span></p>
                    </div>
                    <div className="card-footer text-right">
                        <button className="btn btn-primary" id={game.id} onClick={this.showGameDetails}>Прочети повече</button>
                    </div>
                </div>
            );
        });

        return <>
            <div className="card-deck">
                {gameResults}
            </div>
        </>
    }

}

export default withRouter(DesignGrid);
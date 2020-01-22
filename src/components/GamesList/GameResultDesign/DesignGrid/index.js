import React from 'react';
import moment from 'moment';
import BaseResult from '../BaseResult';

/**
 * Expected parameters:
 * - [JSON Array] games
 */
class DesignGrid extends BaseResult {

    render() {
        const gameResults = this.props.games.map((game) => {
            return (
                <div key={game.id} className="card game-result m-2">
                    <div>
                        <img className="img-fluid mb-3" src={game.background_image} alt={game.slug}/>
                    </div>
                    <div className="px-2">
                        <h3>{game.name}</h3>
                        <span className="badge badge-warning rating">{game.rating} / {game.rating_top}</span>
                        <p>{moment(game.released).format('MMMM Do YYYY')}</p>
                        <hr />
                        <p>Платформи: <span>{this.getPlatformNamesAsString(game)}</span></p>
                        <p>Жанрове: <span>{this.getGenreNamesAsString(game)}</span></p>
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

export default DesignGrid;
import React, { Component } from 'react';
import moment from 'moment';
import '../style.scss';

/**
 * Expected parameters:
 * - [JSON Array] games
 */
class Design1 extends Component {

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

    render() {
        const gameResults = this.props.games.map((game) => {
            return (
                <div key={game.id} className="row game-result py-3 my-3">
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
                    </div>
                </div>
            );
        });

        return gameResults;
    }

}

export default Design1;
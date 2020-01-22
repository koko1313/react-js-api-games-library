import React, { Component } from 'react';
import './style.scss';

/**
 * render methond have to me overrided!
 */
class BaseResult extends Component {

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
        return null;
    }

}

export default BaseResult;
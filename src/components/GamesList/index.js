import React, { Component } from 'react';
import moment from 'moment';
import './style.scss';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class GamesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            page_size: 10,
            pages_count: 0,
        }
    }

    componentDidMount(){
        this.getAllGames();
    }

    getAllGames = () => {
        this.props.getGames({
            page: this.state.page,
            page_size: this.state.page_size,
        });
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
        const games = this.props.games.results;

        if(!games) return null; // if games are not loaded

        const gameResults = games.map((game) => {
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

    renderPages = () => {
        const gamesTotalCount = this.props.games.count;

        if(!gamesTotalCount) return null; // if games are not loaded

        const pagesCount = Math.ceil(gamesTotalCount / this.state.page_size);

        console.log(pagesCount);
    }

    nextPage = (e) => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.getAllGames();
        });
    }

    render() {
        return <>
            {this.renderGames()}
            <button className="btn btn-primary" onClick={this.nextPage}>Next page</button>
            {this.renderPages()}
        </>
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
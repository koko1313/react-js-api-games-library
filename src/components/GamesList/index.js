import React, { Component } from 'react';
import moment from 'moment';
import Paginate from 'react-paginate';
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

        return (
            <Paginate
                pageCount = {pagesCount}
                pageRangeDisplayed = {3}
                marginPagesDisplayed = {2}
                previousLabel = {<i className="fa fa-step-backward"></i>}
                nextLabel = {<i className="fa fa-step-forward"></i>}
                breakLabel = {'...'}
                breakClassName = {'page-item'}
                breakLinkClassName = {'page-link'}
                containerClassName = {'pagination justify-content-center'}
                pageClassName = {'page-item'}
                pageLinkClassName = {'page-link'}
                activeClassName = {'active'}
                previousClassName = {'page-item'}
                nextClassName = {'page-item'}
                previousLinkClassName = {'page-link'}
                nextLinkClassName = {'page-link'}
                
                onPageChange = {this.goToPage}
            />
        );
    }

    goToPage = (e) => {
        const page = e.selected + 1; // the selected page
        this.setState({
            page: page
        }, () => {
            this.getAllGames();
        });
    }

    render() {
        return <>
            {this.renderGames()}
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
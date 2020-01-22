import React, { Component } from 'react';
import Paginate from '../base-components/Paginate';
import Design1 from './GameResultDesign/GameResultDesign1';
import Design2 from './GameResultDesign/GameResultDesign2';
import designs from './GameResultDesign/designs';

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

    renderGames = () => {
        const games = this.props.games.results;

        if(!games) return null; // if games are not loaded

        switch(this.props.resultDesign) {
            case designs.DESIGN_ROWS: return <Design1 games={games} />;
            case designs.DESIGN_GRID: return <Design2 games={games} />;
            default: return null;
        }
    }

    renderPages = () => {
        const gamesTotalCount = this.props.games.count;

        if(!gamesTotalCount) return null; // if games are not loaded

        const pagesCount = Math.ceil(gamesTotalCount / this.state.page_size);

        return <Paginate pagesCount={pagesCount} onPageChange={this.goToPage} />;
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
            <div className="row">
                <div className="col">
                    {this.renderGames()}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {this.renderPages()}
                </div>
            </div>
        </>
    }

}

const mapStateToProps = state => {
    return {
        games: state.games,
        resultDesign: state.resultDesign,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setGames: actions.setGames,
        getGames: actions.getGames,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(GamesList);
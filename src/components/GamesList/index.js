import React, { Component } from 'react';
import Paginate from '../base-components/Paginate';
import DesignRows from './GameResultDesign/DesignRows';
import DesignGrid from './GameResultDesign/DesignGrid';
import DESIGNS_ENUM from './GameResultDesign/DESIGNS_ENUM';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class GamesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPage: this.props.selectedPage,
            page_size: 10,
        }
    }

    // TODO когато излезем и пак влезем в компонента, презареждаме пак всички игри, не трябва да е така
    componentDidMount(){
        this.getAllGames();
    }

    getAllGames = () => {
        this.props.getGames({
            page: this.props.selectedPage,
            page_size: this.state.page_size,
        });
    }

    renderGames = () => {
        // when selected page is changed, call this.getAllGames() again
        if(this.state.selectedPage != this.props.selectedPage) {
            this.getAllGames();
            this.setState({selectedPage: this.props.selectedPage});
        }

        const games = this.props.games.results;

        if(!games) return null; // if games are not loaded

        switch(this.props.resultDesign) {
            case DESIGNS_ENUM.DESIGN_ROWS: return <DesignRows games={games} />;
            case DESIGNS_ENUM.DESIGN_GRID: return <DesignGrid games={games} />;
            default: return null;
        }
    }

    renderPages = () => {
        const gamesTotalCount = this.props.games.count;

        if(!gamesTotalCount) return null; // if games are not loaded

        const pagesCount = Math.ceil(gamesTotalCount / this.state.page_size);

        return <Paginate pagesCount={pagesCount} />;
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
        selectedPage: state.selectedPage,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setGames: actions.setGames,
        getGames: actions.getGames,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(GamesList);
import React from "react";
import Select from "../base-components/Select";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class GenreSelect extends Select {

    getAllGenres = () => {
        this.props.getGenres();
    }

    render() {
        // if genres are not loaded, load them
        if(this.props.genres.length === 0) {
            this.getAllGenres();
        }

        const genres = this.props.genres;
        return (
            <Select name="Жанр" options={genres}/>
        );
    }

}

const mapStateToProps = state => {
    return {
        // в props.genres ще се запише резултата
        // state.genres е функцията от reducers, която извикваме
        genres: state.genres,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setGenres: actions.setGenres,
        getGenres: actions.getGenres,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(GenreSelect);
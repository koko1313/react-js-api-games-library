import React, { Component } from "react";

class GenreSelect extends Component {

    getAllGenres = () => {
        const genres = [];
        for(let i=0; i<10; i++) {
            genres.push("Genre " + i);
        }
        return genres;
    }

    loadAllGenres = () => {
        const genreOptions = this.getAllGenres().map((item, index) => {
            return <option key={index} value={index}>{item}</option>
        });
        return genreOptions;
    }

    selectGenreOnChange = (e) => {
        alert(e.target.value);
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="genreSelect">Жанр</label>
                </div>
                <select className="custom-select" id="genreSelect" onChange={this.selectGenreOnChange}>
                    <option defaultValue value="0">Всички</option>
                    {this.loadAllGenres()}
                </select>
            </div>
        )
    }

}

export default GenreSelect;
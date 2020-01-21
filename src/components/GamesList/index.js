import React, { Component } from 'react';
import './style.scss';

class GamesList extends Component {

    render() {
        return <>
            <div className="row game-result py-3 my-3">
                <div className="col-md-4">
                    <img className="img-fluid mb-3 mb-md-0" src="https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg" alt="game-slug"/>
                </div>
                <div className="col-md">
                    <h3>Grand Theft Auto V</h3>
                    <span class="badge badge-warning rating">4.48 / 5</span>
                    <p>2013-09-17</p>
                    <hr />
                    <p>Платформи: <span>PC, PlayStation, Xbox</span></p>
                    <p>Жанрове: <span>Action, Shooter</span></p>
                </div>
            </div>
        </>
    }

}

export default GamesList;
import React from 'react';
import GenreSelect from '../components/GenreSelect';
import PlatformSelect from '../components/PlatformSelect';
import GamesList from '../components/GamesList';
import ChangeDesignButton from '../components/ChangeDesignButton';
import DESIGNS_ENUM from '../components/GamesList/GameResultDesign/DESIGNS_ENUM';

const GamesPage = () => {
    return <>
        <div className="row">
          <div className="col">
            <h1>Игри</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <GenreSelect />
          </div>
          <div className="col-md">
            <PlatformSelect />
          </div>
          <div className="col-md-2 text-right">
            <ChangeDesignButton value={DESIGNS_ENUM.DESIGN_ROWS}><i className="fa fa-th-list"></i></ChangeDesignButton>
            <ChangeDesignButton value={DESIGNS_ENUM.DESIGN_GRID}><i className="fa fa-th"></i></ChangeDesignButton>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <GamesList />
          </div>
        </div>
    </>
};

export default GamesPage;
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
          <div className="col">
            <GenreSelect />
          </div>
          <div className="col">
            <PlatformSelect />
          </div>
          <div className="col">
            <ChangeDesignButton value={DESIGNS_ENUM.DESIGN_ROWS} label="1" />
            <ChangeDesignButton value={DESIGNS_ENUM.DESIGN_GRID} label="2" />
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
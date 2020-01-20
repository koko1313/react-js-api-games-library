import React from 'react';
import Select from './components/select';
import constants from './constants';

function App() {
  return (
    <div className="container">

      <div className="row">
        <div className="col">
          <h1>Библиотека с игри</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Select name="Жанр" options={constants.allGenres()}/>
        </div>
        <div className="col">
          <Select name="Платформа" options={constants.allPlatforms()}/>
        </div>
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import GenreSelect from './components/genre-select';
import PlatformSelect from './components/platform-select';

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
          <GenreSelect/>
        </div>
        <div className="col">
          <PlatformSelect/>
        </div>
      </div>

    </div>
  );
}

export default App;

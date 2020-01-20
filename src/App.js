import React from 'react';
import Select from './components/select';

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
          <Select name="Жанр" options={[1, 2]}/>
        </div>
        <div className="col">
          <Select name="Платформа" options={[1, 2, 10]}/>
        </div>
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import Select from './components/Select';
import constants from './constants';
import GenreSelect from './components/GenreSelect';

import { createStore, applyMiddleware } from "redux";
import { Provider }  from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="container">

        <div className="row">
          <div className="col">
            <h1>Библиотека с игри</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <GenreSelect />
          </div>
          <div className="col">
            <Select name="Платформа" options={constants.allPlatforms()}/>
          </div>
        </div>

      </div>
    </Provider>
  );
}

export default App;

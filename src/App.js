import React from 'react';
import GenreSelect from './components/GenreSelect';

import { createStore, applyMiddleware } from "redux";
import { Provider }  from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';
import PlatformSelect from './components/PlatformSelect';

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
            <PlatformSelect />
          </div>
        </div>

      </div>
    </Provider>
  );
}

export default App;

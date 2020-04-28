import React from 'react';

import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider }  from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';
import Navbar from './components/Layout/Header';
import GamesPage from './pages/GamesPage';
import AboutPage from './pages/AboutPage';
import GameDetailsPage from './pages/GameDetailsPage/index';

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = (props) => {
  return <>
      <Navbar/>
      <div className="container mt-3">
          {props.children}
      </div>
  </>
};

const routes = [
  {
      path: '/',
      exact: true,
      main: () => <Layout>
        <GamesPage />
      </Layout>
  },
  {
    path: '/about',
    exact: true,
    main: () => <Layout>
      <AboutPage />
    </Layout>
  },
  {
    path: '/games/:id',
    exact: false,
    main: () => <Layout>
      <GameDetailsPage />
    </Layout>
  },
];

const getRoutes = () => {
  return routes.map((route, index) => {
      return <Route key={index} exact={route.exact} path={route.path}>
          {route.main}
      </Route>;
  });
}

function App() {
  return (
   <Provider store={store}>
    <HashRouter>
        <Switch>
          {getRoutes()}
        </Switch>
    </HashRouter>
  </Provider>
  );
}

export default App;
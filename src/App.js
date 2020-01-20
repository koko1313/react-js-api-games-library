import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider }  from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';
import Navbar from './components/Layout/Header';
import GamesPage from './pages/GamesPage';
import HomePage from './pages/HomePage';

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
        <HomePage/>
      </Layout>
  },
  {
    path: '/games',
    exact: true,
    main: () => <Layout>
      <GamesPage/>
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
    <Router>
        <Switch>
          {getRoutes()}
        </Switch>
    </Router>
  </Provider>
  );
}

export default App;
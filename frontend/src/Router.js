/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import SearchCountry from './pages/SearchCountry';
import Innovation from './pages/Innovation';


const privateRoutes = [
    { path: '/search', component: SearchCountry},
    { path: '/innovation', component: Innovation},
]

const Routes = () => {
    return (
      <Router>
          <Switch>
              {privateRoutes.map((route, index) => (
                  <InternalRoute {...route} key={index} />
              ))}
          </Switch>
      </Router>
        
    );
};

function InternalRoute ({ component: Component, ...rest }) {
    return (
        <Component />
    );
}

export default Routes;
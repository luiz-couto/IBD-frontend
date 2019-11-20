/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import SearchCountry from './pages/SearchCountry';
import CommunicationAndInformation from './pages/Communication_and_Information';

const privateRoutes = [
    { path: '/search', component: SearchCountry},
    { path: '/communication_and_information', component: CommunicationAndInformation},

]

const Routes = () => {
    return (
      <Router>
          <Route exact path="/" component={() => (
          <Redirect to={{ pathname: '/search' }} />
        )} />
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
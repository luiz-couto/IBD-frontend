import React from 'react';
import { render } from 'react-dom';
import Routes from './Router';
import * as serviceWorker from './serviceWorker';

render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToRA95 from './ToRA95';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ToRA95 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Text from './text.js';
import NavSwitcher from './nav_switcher.js'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<NavSwitcher />, document.getElementById('root'));
//ReactDOM.render(<Text />, document.getElementById('root'));
registerServiceWorker();

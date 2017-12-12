import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reverse from './Reverse';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Reverse />, document.getElementById('root'));
registerServiceWorker();

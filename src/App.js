import React from 'react';
import ReactDOM from 'react-dom';
/*import './app.css';*/
import App from './index/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

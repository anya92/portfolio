import React from 'react';
import { render } from 'react-dom';
import '../node_modules/modern-normalize/modern-normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));

registerServiceWorker();

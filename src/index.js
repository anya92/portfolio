import React from 'react';
import { render } from 'react-dom';
import 'prismjs';

import '../node_modules/modern-normalize/modern-normalize.css';
// import 'prismjs/themes/prism-tomorrow.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// prismjs.plugins.NormalizeWhiteSpace.setDefaults()

render(<App />, document.getElementById('root'));

registerServiceWorker();

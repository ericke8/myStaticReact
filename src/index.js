import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

const title = 'My React Boilerplate'

ReactDom.render(
  <HashRouter>
    <App />
  </HashRouter>
  , document.getElementById('app')
);

module.hot.accept();
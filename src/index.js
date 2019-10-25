import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';

const title = 'My React Boilerplate'

ReactDom.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
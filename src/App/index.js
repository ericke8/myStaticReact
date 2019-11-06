import React from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';

class App extends React.Component {
  render() {
    return (
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
    );
  }
};

export default App;
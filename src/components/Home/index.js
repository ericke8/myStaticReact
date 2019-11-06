import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <li><Link to="/about">About</Link></li>
      </div>
    );
  }
}

export default Home;
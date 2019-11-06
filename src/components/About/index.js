import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component{
  render(){
    return(
      <div>
        <h1>About Page</h1>
        <li><Link to="/">Home</Link></li>
      </div>
    );
  }
}

export default About;
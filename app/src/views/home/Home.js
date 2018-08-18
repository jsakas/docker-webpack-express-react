import React, { Component } from 'react';

import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__intro">
          <h1>Docker, Webpack, Express, React</h1>
          <h2>A web application boilerplate.</h2>
        </div>
      </div>
    );
  }
}

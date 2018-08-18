import React, { Component } from 'react';

import './Error.scss';

export class ServerError extends Component {
  render() {
    let { error } = this.props;
    return (
      <div>
        <h1>Error: {error.message}</h1>
        <h2>Stacktrace</h2>
        <code>
          <pre>
            {error.stack}
          </pre>
        </code>
      </div>
    );
  }
}

export class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>404: Not Found</h2>
        <p>
          Sorry, we can&apos;t find the page you requested.
        </p>
      </div>
    );
  }
}

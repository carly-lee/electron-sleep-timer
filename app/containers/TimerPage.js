// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TimerPage extends Component {
  render() {
    return (
      <div>
        Timer Page
        <Link to="/">to Home</Link>
      </div>
    );
  }
}

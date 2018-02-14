import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../containers/Navbar';
import Map from '../containers/Map';
import Record from '../containers/Record';

export default class App extends Component {
  get changeCurrentView() {
    if (this.props.currentView === 'home') {
      return (<Map />);
    }
    return (<Record />);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {this.changeCurrentView}
      </div>
    );
  }
}

App.propTypes = {
  currentView: PropTypes.string.isRequired,
};

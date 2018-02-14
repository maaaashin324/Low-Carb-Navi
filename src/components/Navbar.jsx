import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
  handleHomeClick = (e) => {
    e.preventDefault();
    this.props.goAnywhere(e.target.name);
  };

  render() {
    return (
      <div className="navbar">
        <button className="navbar-header" name="home" onClick={this.handleClick}>HOME</button>
        <button className="navbar-header" name="map" onClick={this.handleClick}>MAP</button>
        <button className="navbar-header" name="record" onClick={this.handleClick}>RECORD</button>
      </div>
    );
  }
}

Navbar.propTypes = {
  goAnywhere: PropTypes.func.isRequired,
};

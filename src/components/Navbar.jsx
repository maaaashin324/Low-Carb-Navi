import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.goAnyWhere(e.target.name);
  };

  render() {
    return (
      <div className="navbar">
        <button className="navbar-header" name="home" onClick={this.handleClick}>HOME</button>
        <button className="navbar-header" name="record" onClick={this.handleClick}>RECORD</button>
      </div>
    );
  }
}

Navbar.propTypes = {
  goAnyWhere: PropTypes.func.isRequired,
};

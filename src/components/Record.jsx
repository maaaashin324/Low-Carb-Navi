import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Record extends Component {
  handleSubmit = (event) => {
    console.log(event);
    this.props.registRestaurant(event);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="restaurant.name">
          <input type="text" name="restaurantName" ref={(input) => { this.input = input; }} />
        </label>
        <label htmlFor="restaurant.address">
          <input type="text" name="restaurantAddress" ref={(input) => { this.input = input; }} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Record.propTypes = {
  registRestaurant: PropTypes.func.isRequired,
};

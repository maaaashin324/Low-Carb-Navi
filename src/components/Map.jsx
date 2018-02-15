import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const ActualMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 35.681382, lng: 139.76608399999998 }}
  >
    {props.markers.map(marker => (
      <Marker
        position={{ lat: marker.position.lat, lng: marker.position.lng }}
      />
    ))}
  </GoogleMap>
)));

export default class Map extends Component {
  componentDidMount() {
    if (this.props.restaurants <= 0) {
      // this.props.getRestaurants();
    }
  }

  render() {
    return (
      <ActualMap
        className="restaurantMap"
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        markers={this.props.restaurants}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '800px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
  }
}

Map.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.shape(PropTypes.string).isRequired,
  })).isRequired,
  // getRestaurants: PropTypes.func.isRequired,
};

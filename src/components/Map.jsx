import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const ActualMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 35.681382, lng: 139.76608399999998 }}
  >
    {props.markers.map((marker) => {
      const blueMark = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red.png';
      return (
        <Marker
          position={{ lat: +marker.position.lat, lng: +marker.position.lng }}
          icon={{ url: blueMark }}
        />
      );
    })}
  </GoogleMap>
)));

export default class Map extends Component {
  async componentDidMount() {
    if (this.props.restaurants.length === 0) {
      this.props.getMarkers();
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
    id: PropTypes.any,
    name: PropTypes.any,
    position: PropTypes.arrayOf(PropTypes.any),
  })).isRequired,
  getMarkers: PropTypes.func.isRequired,
};

import { connect } from 'react-redux';
import { getMarkers } from '../actions/map';
import Map from '../components/Map';

const mapStateToProps = state => ({
  restaurants: state.map.restaurants,
});

const mapDispatchToProps = dispatch => ({
  getMarkers: () => dispatch(getMarkers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);

import { connect } from 'react-redux';
import { getRestaurants } from '../actions/map';
import Map from '../components/Map';

const mapStateToProps = state => ({
  restaurants: state.map.restaurants,
});

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);

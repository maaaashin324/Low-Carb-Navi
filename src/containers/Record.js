import { connect } from 'react-redux';
import { recordRestaurant } from '../actions/record';
import Record from '../components/Record';

const mapPropsToState = state => ({
  name: state.name,
  address: state.address,
});

const mapDispatchToState = dispatch => ({
  recordRestaurant: (restaurantData) => {
    dispatch(recordRestaurant(restaurantData));
  },
});

export default connect(mapPropsToState, mapDispatchToState)(Record);

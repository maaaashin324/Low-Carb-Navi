import { connect } from 'react-redux';
import { recordRestaurant } from '../actions/record';
import Record from '../components/Record';

const mapPropsToState = state => ({
  name: state.record.name,
  address: state.record.nameaddress,
});

const mapDispatchToState = dispatch => ({
  recordRestaurant: (restaurantData) => {
    dispatch(recordRestaurant(restaurantData));
  },
});

export default connect(mapPropsToState, mapDispatchToState)(Record);

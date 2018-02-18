import { connect } from 'react-redux';
import { registRestaurantAction } from '../actions/record';
import Record from '../components/Record';

const mapPropsToState = state => ({
  name: state.record.name,
  address: state.record.nameaddress,
});

const mapDispatchToState = dispatch => ({
  registRestaurant: (restaurantData) => {
    dispatch(registRestaurantAction())(restaurantData);
  },
});

export default connect(mapPropsToState, mapDispatchToState)(Record);

import { connect } from 'react-redux';
import { goAnyWhere } from '../actions/map';
import Navbar from '../components/Navbar';

const mapDispatchToProps = dispatch => ({
  goAnyWhere: (dest) => {
    dispatch(goAnyWhere(dest));
  },
});

export default connect(null, mapDispatchToProps)(Navbar);

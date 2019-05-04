import { connect } from 'react-redux';
import Landing from '../../components/Landing/Landing';

const mapStateToProps = state => ({
  searchResults: state.restaurants.searchResults,
});

export default connect(
  mapStateToProps,
  null
)(Landing);

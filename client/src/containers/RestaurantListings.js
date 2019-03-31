import { connect } from 'react-redux';
import RestaurantListings from '../components/RestaurantListings';
import { fetchInitialListings } from '../store/actions/restaurants';

const mapStateToProps = state => ({
  listings: state.restaurants,
});

const mapDispatchToProps = {
  fetchInitialListings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantListings);

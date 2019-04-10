import { connect } from 'react-redux';
import RestaurantListings from '../components/RestaurantListings';
import { fetchInitialListings } from '../store/actions/restaurants';

const mapStateToProps = state => ({
  initialListings: state.restaurants.initialListings,
  searchResults: state.restaurants.searchResults,
});

const mapDispatchToProps = {
  fetchInitialListings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantListings);

import { connect } from 'react-redux';
import RestaurantProfile from '../../components/RestaurantProfile/RestaurantProfile';
import { fetchRestaurantProfile, fetchRestaurantReviews } from '../../store/actions/restaurants';

const mapStateToProps = state => ({
  profile: state.restaurants.selectedRestaurant,
});

const mapDispatchToProps = {
  fetchRestaurantProfile,
  fetchRestaurantReviews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantProfile);

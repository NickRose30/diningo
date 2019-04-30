import { connect } from 'react-redux';
import RestaurantProfile from '../../components/RestaurantProfile/RestaurantProfile';
import { fetchRestaurantProfile } from '../../store/actions/restaurants';

const mapStateToProps = state => ({
  profile: state.restaurants.selectedRestaurant,
});

const mapDispatchToProps = {
  fetchRestaurantProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantProfile);

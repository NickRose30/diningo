import { connect } from 'react-redux';
import * as R from 'ramda';
import RestaurantMenu from '../../components/Menu/RestaurantMenu';
import { fetchRestaurantMenu } from '../../store/actions/restaurants';

const mapStateToProps = state => ({
  menu: R.path(['restaurants', 'selectedRestaurant', 'menu'], state),
});

const mapDispatchToProps = {
  fetchMenu: fetchRestaurantMenu,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantMenu);

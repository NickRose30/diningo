import { connect } from 'react-redux';
import ListingAside from '../components/ListingAside';
import * as R from 'ramda';

const mapStateToProps = state => ({
  results: R.ifElse(
    R.has('searchResults'),
    R.path(['searchResults', 'results']),
    R.prop('initialListings')
  )(state.restaurants),
});

export default connect(
  mapStateToProps,
  null
)(ListingAside);

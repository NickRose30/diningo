import { connect } from 'react-redux';
import Search from '../../components/Nav/Search';
import { fetchSearchResults } from '../../store/actions/restaurants';

const mapDispatchToProps = {
  handleSearch: input => fetchSearchResults(input),
};

export default connect(
  null,
  mapDispatchToProps
)(Search);

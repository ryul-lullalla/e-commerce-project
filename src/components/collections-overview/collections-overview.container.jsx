import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
    
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.components';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});
  
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview),
// );

export default CollectionsOverviewContainer;

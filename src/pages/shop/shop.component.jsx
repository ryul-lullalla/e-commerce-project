import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  // selectIsCollectionsLoaded,
  selectCollectionsForPreview,
} from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.components';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({ loading: false });
    //   },
    // );

    // handling data with Promise chain pattern
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    // handling data (fetching data asynchronous way with redux called redux-thunk)
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionLoaded, collections } = this.props;
    console.log(collections);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isCollectionDataFetched={collections}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isCollectionDataFetched={collections}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  // its the way to  evaluate whether data of collections exist with new selector
  // collections: selectIsCollectionsLoaded,

  // its the way to evaluate whether collections data exist with the boolean value with existing selector used in collection-preview component
  collections: selectCollectionsForPreview,
});

// const mapDispatchToProps = (dispatch) => ({
//   updateCollections: (collectionsMap) =>
//     dispatch(updateCollections(collectionsMap)),
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

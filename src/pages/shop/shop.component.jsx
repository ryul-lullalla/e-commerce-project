import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);  
  console.log(match.path, 'allalalalla');
  // componentDidMount() {
  //   // const { updateCollections } = this.props;
  //   // const collectionRef = firestore.collection('collections');

  //   // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
  //   //   async (snapshot) => {
  //   //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //     updateCollections(collectionsMap);
  //   //     this.setState({ loading: false });
  //   //   },
  //   // );

  //   // handling data with Promise chain pattern
  //   // collectionRef.get().then((snapshot) => {
  //   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //   updateCollections(collectionsMap);
  //   //   this.setState({ loading: false });
  //   // });

  //   // handling data (fetching data asynchronous way with redux called redux-thunk)
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   updateCollections: (collectionsMap) =>
//     dispatch(updateCollections(collectionsMap)),
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

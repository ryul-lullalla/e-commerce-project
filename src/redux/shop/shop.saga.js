import { takeEvery, call, all, put, takeLatest } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot,
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  //   export const fetchCollectionsStartAsync = () => {
  //     return (dispatch) => {
  //       const collectionRef = firestore.collection('collections');
  //       dispatch(fetchCollectionsStart());
  //       collectionRef
  //         .get()
  //         .then((snapshot) => {
  //           console.log(snapshot);
  //           const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //           dispatch(fetchCollectionsSuccess(collectionsMap));
  //         })
  //         .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  //     };
  //   };
}

export function* fetchCollectionStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}

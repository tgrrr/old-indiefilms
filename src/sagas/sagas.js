// import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

// This will fire the desirable action
export function * testSagaFired () {
  yield put({ type: 'TESTACTION_FIRED' });
}

// keep eye on action
export function * testSaga () {
  yield takeEvery('TESTACTION', testSagaFired);
}

// combine the sagas
export default function * rootSaga () {
  yield all([
    testSaga()
  ]);
}

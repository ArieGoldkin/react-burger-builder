import { takeEvery, takeLatest, all, fork } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authSaga,
  authCheckStateSaga,
} from "./auth";

import { initIngredientsSaga } from "./burgerBuilder";
import { purchaseBurgerSaga, fetchOrdersSaga } from "./order";

function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER, authSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

function* watchBurgerBuilder() {
  yield takeLatest(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeLatest(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}

export default function* rootSaga() {
  yield all([fork(watchAuth), fork(watchBurgerBuilder), fork(watchOrder)]);
}

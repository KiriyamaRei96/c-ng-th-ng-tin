import { all } from "redux-saga/effects";
import globalSaga from "./globalSlice/saga";
import newsEventsSaga from "./newSlice/saga";
import pointSaga from "./pointSlice/saga";

export default function* rootSaga() {
  yield all([pointSaga(),globalSaga(),newsEventsSaga()]);
}

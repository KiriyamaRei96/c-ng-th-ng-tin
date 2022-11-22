import { all } from "redux-saga/effects";
import CommentlSaga from "./commentSlice/saga";
import commercailSaga from "./commercial/saga";
import globalSaga from "./globalSlice/saga";
import newsEventsSaga from "./newSlice/saga";
import pointSaga from "./pointSlice/saga";
import searchSaga from "./search/saga";
import utilitiesSaga from "./utilitieSlice/saga";

export default function* rootSaga() {
  yield all([
    pointSaga(),
    globalSaga(),
    newsEventsSaga(),
    commercailSaga(),
    utilitiesSaga(),
    searchSaga(),
    CommentlSaga()
  ]);
}

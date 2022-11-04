import { all } from "redux-saga/effects";
import pointSaga from "./pointSlice/saga";

export default function* rootSaga() {
  yield all([pointSaga()]);
}

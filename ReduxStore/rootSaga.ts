import { all } from "redux-saga/effects";
import pointSaga from "../pages/Discover/_slice/_saga";

export default function* rootSaga() {
  yield all([pointSaga()]);
}

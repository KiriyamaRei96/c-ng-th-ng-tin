import { put, takeLatest } from "redux-saga/effects";
import callApi from "../../../Api/Axios";
function* getpoints(action) {
  console.log(action);
  try {
    const res = yield callApi
      .get("/v2/point_list?page=1&limit=10&order_key=sort&locale=vi&search=")
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_POINT", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}
function* pointSaga() {
  yield takeLatest("GET_POINT", getpoints);
}
export default pointSaga;

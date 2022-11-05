import { debounce, put, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";
function* getpoints(action) {
  try {
    const res = yield callApi
      .get(
        "/v2/point_list?page=1&limit=100000&order_key=sort&locale=vi&search="
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_POINT", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}
function* getPointType(action) {
  try {
    const res = yield callApi
      .get(
        "/v2/pointType/list?locale=vi"
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_POINT_TYPE", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}

function* searchPoints(action) {
  const data = new URLSearchParams(action.payload).toString();
  try {
    const res = yield callApi
      .get(
        `/v2/point_list?${data}`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));

    yield put({ type: "SET_SEARCH_POINT", payload: res });
  } catch (err) {
    console.error(err);
  }
}
function* pointSaga() {
  yield takeLatest("GET_POINT", getpoints);
  yield takeLatest("GET_POINT_TYPE", getPointType);

  yield takeLatest("SEARCH_POINT", searchPoints);
}
export default pointSaga;

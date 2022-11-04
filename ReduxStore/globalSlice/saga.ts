import { debounce, put, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";
function* getlanguage(action) {
  try {
    const res = yield callApi
      .get("v2/language")
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_POINT", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}

function* getDistrict(action) {
  try {
    const res = yield callApi
      .get(`/api/v2/district/list?locale=vi`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    yield put({ type: "SET_SEARCH_POINT", payload: res });
  } catch (err) {
    console.error(err);
  }
}
function* globalSaga() {
  yield takeLatest("GET_LANG", getlanguage);
  yield takeLatest("GET_DISTRICT", getDistrict);
}
export default globalSaga;

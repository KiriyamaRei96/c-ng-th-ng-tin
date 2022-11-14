import { debounce, put, select, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";
function* getlanguage(action) {

  try {
    const res = yield callApi
      .get("v2/language")
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_LANG", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}

function* getDistrict(action) {
  const state = yield select();
  const locale = state.global.language

    try {
    const res = yield callApi
      .get(`/v2/district/list?locale=${locale}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    yield put({ type: "SET_DISTRICT", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}
function* globalSaga() {
  yield takeLatest("GET_LANG", getlanguage);
  yield takeLatest("GET_DISTRICT", getDistrict);
}
export default globalSaga;

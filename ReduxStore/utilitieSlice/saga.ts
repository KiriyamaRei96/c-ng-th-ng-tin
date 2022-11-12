import { debounce, put, select, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";

function* getUtilitiesType(action) {
  const state = yield select();
  const locale = state.global.language
  try {
    const res = yield callApi
      .get(`/v2/utilitiesType/list?locale=${locale}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_UTILITIES_TYPE", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}

function* searchUtilities(action) {
  const state = yield select();
  const locale = state.global.language
  const data = new URLSearchParams(action.payload).toString();
  try {
    const res = yield callApi
      .get(`/v2/utilities_list?${data}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    yield put({ type: "SET_SEARCH_UTILITIES", payload: res });
  } catch (err) {
    console.error(err);
  }
}
function* utilitiesSaga() {
  yield takeLatest("GET_UTILITIES_TYPE", getUtilitiesType);

  yield takeLatest("SEARCH_UTILITIES", searchUtilities);
}
export default utilitiesSaga;

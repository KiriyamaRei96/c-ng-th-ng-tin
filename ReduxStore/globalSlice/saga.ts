import { debounce, delay, put, select, takeLatest } from "redux-saga/effects";
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
function* getOnline(action) {
  console.log(action.payload);

  while (true) {
    try {
      const data = yield callApi
        .get(`/v2/main/main?key=${action.payload}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
    yield delay(60000);
  }
}
function* getDistrict(action) {
  const state = yield select();
  const locale = state.global.language;

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
function* getSetting(action) {
  const state = yield select();
  const locale = state.global.language;

  try {
    const res = yield callApi
      .get(`v2/webSetting?locale=${locale}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    yield put({ type: "SET_SETTING", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}
function* globalSaga() {
  yield takeLatest("GET_LANG", getlanguage);
  yield takeLatest("GET_ONLINE", getOnline);

  yield takeLatest("GET_DISTRICT", getDistrict);
  yield takeLatest("GET_SETTING", getSetting);
}
export default globalSaga;

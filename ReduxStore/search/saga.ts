import { debounce, put, select, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";

function* search(action) {
  const state = yield select();
  const locale = state.global.language
  const data = new URLSearchParams({...action.payload,locale,limit:9}).toString();
  try {
    const res = yield callApi
      .get(
        `/v2/search?${data}`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));

    yield put({ type: "SET_SEARCH", payload: res });
  } catch (err) {
    console.error(err);
  }
}
function* searchSaga() {


  yield takeLatest("SEARCH", search);
}
export default searchSaga;

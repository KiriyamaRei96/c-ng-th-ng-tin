import { debounce, put, select, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";
function* searchCommercial(action) {
  const state = yield select();
  const listType = state.commercial.listType;
  try {
    const params = new URLSearchParams(action.payload).toString();
    const res = yield callApi
      .get(`/v2/${listType}?${params}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    yield put({ type: "SET_SEARCH_COMMERCIAL", payload: res });
  } catch (err) {
    console.error(err);
  }
}

function* commercailSaga() {
  yield takeLatest("GET_SEARCH_COMMERCIAL", searchCommercial);
}
export default commercailSaga;

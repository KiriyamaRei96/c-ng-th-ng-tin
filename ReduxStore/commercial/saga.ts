import { debounce, put, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";
function* searchCommercial(action) {
  try {
    const params = new URLSearchParams(action.payload.params).toString();
    const res = yield callApi
      .get(`/v2/${action.payload.listType}?${params}`)
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

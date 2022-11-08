import { debounce, put, select, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";
import queryString from "query-string";
function* searchCommercial(action) {
  const state = yield select();
  const listType = state.commercial.listType;
  const filter = state.commercial.filter;

  try {
    const stringified = queryString.stringify({ ...action.payload, ...filter });

    if (listType) {
      const res = yield callApi
        .get(`/v2/${listType}?${stringified}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));

      yield put({ type: "SET_SEARCH_COMMERCIAL", payload: res });
    }
  } catch (err) {
    console.error(err);
  }
}
function* getTypes(action) {
  try {
    const restaurantCategory = yield callApi
      .get(`/v2/restaurantCategory/list?locale=vi`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    const restaurantType = yield callApi
      .get(`/v2/restaurantType/list?locale=vi`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    const hotelType = yield callApi
      .get(`/v2/hotelType/list?locale=vi`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    const tourType = yield callApi
      .get(`/v2/tourType/list?locale=vi`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    const destinationsType = yield callApi
      .get(`/v2/destinationsType/list?locale=vi`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    yield put({
      type: "SET_TYPES",
      payload: {
        restaurantCategory,
        restaurantType,
        hotelType,
        tourType,
        destinationsType,
      },
    });
  } catch (err) {
    console.error(err);
  }
}

function* commercailSaga() {
  yield takeLatest("GET_SEARCH_COMMERCIAL", searchCommercial);
  yield takeLatest("GET_TYPES", getTypes);
}
export default commercailSaga;

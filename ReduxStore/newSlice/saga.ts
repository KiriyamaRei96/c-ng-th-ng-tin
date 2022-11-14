import { debounce, put, select, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";
function* getNews(action) {
  const state = yield select();
  const locale = state.global.language
  try {
    const res = yield callApi
      .get(`/v2/news_list?page=1&limit=6&order_key=sort&locale=${locale}&search=`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_NEWS", payload: res });
  } catch (err) {
    console.error(err);
  }
}
function* getCategory(action) {
  const state = yield select();
  const locale = state.global.language
  try {
    const res = yield callApi
      .get(`/v2/category/list?locale=${locale}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_CATEGORY", payload: res });
  } catch (err) {
    console.error(err);
  }
}
function* searchNews(action) {
  const state = yield select();
  const locale = state.global.language
  try {
    const params = new URLSearchParams({...action.payload,locale}).toString();
    const res = yield callApi
      .get(`/v2/news_list?${params}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_SEARCH_NEWS", payload: res });
  } catch (err) {
    console.error(err);
  }
}

function* getEvents(action) {
  const state = yield select();
  const locale = state.global.language
  try {
    const res = yield callApi
      .get(
        `/v2/event_list?page=${action.payload}&limit=6&order_key=sort&locale=${locale}&search=`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
    yield put({ type: "SET_EVENTS", payload: res });
  } catch (err) {
    console.error(err);
  }
}

function* newsEventsSaga() {
  yield takeLatest("GET_NEWS", getNews);
  yield takeLatest("GET_CATEGORY", getCategory);

  yield takeLatest("SEARCH_NEWS", searchNews);
  yield takeLatest("GET_EVENTS", getEvents);
}
export default newsEventsSaga;

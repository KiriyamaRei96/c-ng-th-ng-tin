import { debounce, put, select, takeLatest } from "redux-saga/effects";
import callApi from "../../Api/Axios";


function* getComment(action) {
  const state = yield select();
  const locale = state.global.language;

  try {
    const res = yield callApi
      .get(`/v2/comment/get?postsId=${action.payload}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

 
    yield put({ type: "SET_COMMENT", payload: res.data });
  } catch (err) {
    console.error(err);
  }
}
function* createComment(action) {
 
    try {
      const res = yield callApi
        .post(`v2/comment/create`,action.payload.data)
        .then((res) => res.data)
        .catch((err) => console.error(err));
   if(res.status ===1 ){
    yield put({ type: "GET_COMMENT", payload: action.payload.id });
   }
   
    } catch (err) {
      console.error(err);
    }
  }

function* CommentlSaga() {


  yield takeLatest("GET_COMMENT", getComment);
  yield takeLatest("CREATE_COMMENT", createComment);

  
}
export default CommentlSaga;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// ...
import createSagaMiddleware from "redux-saga";
import { pointSlice } from "../pages/Discover/_slice/_slice";
const sagaMiddleware = createSagaMiddleware();
import rootSaga from "./rootSaga";
export const store = configureStore({
  reducer: { point: pointSlice.reducer },
  middleware: (getDefaultMiddleware) => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

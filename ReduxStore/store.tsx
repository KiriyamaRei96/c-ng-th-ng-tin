import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// ...
import createSagaMiddleware from "redux-saga";
import { globalSlice } from "./globalSlice/slice";
import { newsEventsSlice } from "./newSlice/slice";
import { pointSlice } from "./pointSlice/slice";
const sagaMiddleware = createSagaMiddleware();
import rootSaga from "./rootSaga";
export const store = configureStore({
  reducer: {
    point: pointSlice.reducer,
    global: globalSlice.reducer,
    newsEvents: newsEventsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
const makeStore = () => store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper<AppStore>(makeStore);

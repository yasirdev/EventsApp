import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

// Files
import mainReducer from '../main/mainSlice';

export const store = configureStore({
  reducer: {
    mainReducer,
  },
  middleware: getDefaultMiddleware({serializableCheck: false}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

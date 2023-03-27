import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../features/loading/loadingSlice";
import amountSlice from "../features/amount/amountSlice";
import categorySlice from "../features/category/categorySlice";
import difficultySlice from "../features/difficulty/difficultySlice";
import typeSlice from "../features/type/typeSlice";
import { OpenTriviaApiSlice } from "../features/api/fetchQuizSlice";
import indexSlice from "../features/questionIndex/indexSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    amount: amountSlice,
    category: categorySlice,
    difficulty: difficultySlice,
    type: typeSlice,
    questionIndex: indexSlice,
    [OpenTriviaApiSlice.reducerPath]: OpenTriviaApiSlice.reducer,
  },
  // setting up middleware to expand and take on the new fetching slices, cache lifetimes
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(OpenTriviaApiSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

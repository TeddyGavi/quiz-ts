import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../features/loading/loadingSlice";
import amountSlice from "../features/amount/amountSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    amount: amountSlice,
    // category: categoryReducer,
    // difficulty: difficultyReducer,
    // type: typeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

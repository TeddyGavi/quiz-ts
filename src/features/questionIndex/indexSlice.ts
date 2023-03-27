import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface indexState {
  qIndex: number;
}

const initQIndex: indexState = {
  qIndex: -1,
};

const qIndexSice = createSlice({
  name: "qIndex",
  initialState: initQIndex,
  reducers: {
    increment(state, action: PayloadAction<void>) {
      state.qIndex += 1;
    },
    decrement(state, action: PayloadAction<void>) {
      if (state.qIndex === 0) {
        state.qIndex = 0;
      } else {
        state.qIndex -= 1;
      }
    },
    reset(state, action: PayloadAction<void>) {
      state.qIndex = 0;
    },
  },
});

export const { increment, decrement, reset } = qIndexSice.actions;
export default qIndexSice.reducer;

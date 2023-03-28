import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import scoreSlice, { scoreActions } from "../score/scoreSlice";

interface indexState {
  qIndex: number;
}

const initQIndex: indexState = {
  qIndex: -1,
};

// const increment = createAction<void>("increment")

const qIndexSlice = createSlice({
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
      state.qIndex = -1;
    },
    startOver(state, action: PayloadAction<void>) {
      state.qIndex = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(scoreActions.reset, (state) => {
      state.qIndex = -1;
    });
  },
});
export const indexActions = qIndexSlice.actions;
export const { increment, decrement, reset, startOver } = qIndexSlice.actions;
export default qIndexSlice.reducer;

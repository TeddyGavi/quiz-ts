import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { indexActions } from "../questionIndex/indexSlice";

interface scoreState {
  score: number;
}

const initState: scoreState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState: initState,
  reducers: {
    plusOne(state, action: PayloadAction<void>) {
      state.score += 1;
    },
    reset(state, action: PayloadAction<void>) {
      state.score = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(indexActions.reset, (state) => {
      state.score = 0;
    });
  },
});
export const scoreActions = scoreSlice.actions;
export const { plusOne, reset } = scoreSlice.actions;
export default scoreSlice.reducer;

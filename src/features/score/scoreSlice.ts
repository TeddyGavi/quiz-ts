import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
});

export const { plusOne, reset } = scoreSlice.actions;
export default scoreSlice.reducer;

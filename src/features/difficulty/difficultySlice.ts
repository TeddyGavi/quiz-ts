import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DifficultyState {
  difficulty: string;
}

const initDifficulty: DifficultyState = {
  difficulty: "",
};

const difficultySlice = createSlice({
  name: "difficulty",
  initialState: initDifficulty,
  reducers: {
    setDifficulty(state, action: PayloadAction<string>) {
      state.difficulty = action.payload;
    },
  },
});

export const { setDifficulty } = difficultySlice.actions;
export default difficultySlice.reducer;

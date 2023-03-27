import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface selectedState {
  selected: string;
}

const initSelectedSate: selectedState = {
  selected: "",
};

const selectedSlice = createSlice({
  name: "selectedAnswer",
  initialState: initSelectedSate,
  reducers: {
    setSelected(state, action: PayloadAction<string>) {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = selectedSlice.actions;
export default selectedSlice.reducer;

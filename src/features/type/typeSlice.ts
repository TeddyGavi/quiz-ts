import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypeState {
  type: string;
}

const initType: TypeState = {
  type: "",
};

const typeSlice = createSlice({
  name: "type",
  initialState: initType,
  reducers: {
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
  },
});

export const { setType } = typeSlice.actions;
export default typeSlice.reducer;

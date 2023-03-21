import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface amountState {
  amount: number;
}

const initAmount: amountState = {
  amount: 0,
};

const amountSlice = createSlice({
  name: "amount",
  initialState: initAmount,
  reducers: {
    setAmount(state, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
  },
});

export const { setAmount } = amountSlice.actions;
export default amountSlice.reducer;

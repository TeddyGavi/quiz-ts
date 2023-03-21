import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AmountState {
  amount: number | string;
}

const initAmount: AmountState = {
  amount: 10,
};

const amountSlice = createSlice({
  name: "amount",
  initialState: initAmount,
  reducers: {
    setAmount(state, action: PayloadAction<number | string>) {
      if (action.payload < 0) {
        state.amount = 0;
      } else if (action.payload > 50) {
        state.amount = 50;
      } else {
        state.amount = action.payload;
      }
    },
  },
});

export const { setAmount } = amountSlice.actions;
export default amountSlice.reducer;

import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  historyBooking: [],
  historyPayment: []
}

const ticket = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    bookTicketActions: (state, action) => {
      const existingIndex = state.historyBooking.findIndex(
        booking => booking.idTransaction === action.payload.idTransaction
      );
      
      if (existingIndex === -1) {
        state.historyBooking.push(action.payload);
      } else {
        state.historyBooking[existingIndex] = action.payload;
      }
    },
    paymentAction:  (state, action) => {
      state.historyPayment.push(action.payload)
    }
  }
})

export const { bookTicketActions, paymentAction } = ticket.actions
export default ticket.reducer
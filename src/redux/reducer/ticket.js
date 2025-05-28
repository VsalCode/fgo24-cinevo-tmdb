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
      state.historyBooking.push(action.payload)
    },
    paymentAction:  (state, action) => {
      state.historyPayment.push(action.payload)
    }
  }
})

export const { bookTicketActions, paymentAction } = ticket.actions
export default ticket.reducer
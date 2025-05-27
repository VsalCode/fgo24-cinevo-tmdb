import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  historyBooking: [],
  historyPayment: []
}

const ticket = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    bookTicketActions: (state, actions) => {
      state.historyBooking.push(actions.payload)
    },
    paymentAction:  (state, action) => {
      state.historyPayment.push(action.payload)
    }
  }
})

export const { bookTicketActions, paymentAction } = ticket.actions
export default ticket.reducer
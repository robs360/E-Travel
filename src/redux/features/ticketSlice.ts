import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticketCounter: []
}
const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        addTickets: (state, action) => {
            state.ticketCounter = action.payload; // Replaces the current array
        },
        clearTickets: (state) => {
            state.ticketCounter = [];
        },
    }
})
export const {addTickets,clearTickets}=ticketSlice.actions
export default ticketSlice.reducer
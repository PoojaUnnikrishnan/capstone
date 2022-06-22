import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  bookingItems: localStorage.getItem("bookingItems")
    ? JSON.parse(localStorage.getItem("bookingItems"))
    : [],
  bookingTotalQuantity: 0,
};

const bookingslice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addTOBookings(state, action) {
      state.bookingItems.push(action.payload);
      localStorage.setItem("bookingItems", JSON.stringify(state.bookingItems));
      toast.success("Your slot is booked successfully", {
        position: "top-right",
      });
    },
    removeFromForms(state, action) {
      state.bookingItems.map((bookingItem) => {
        if (bookingItem.id === action.payload.id) {
          const nextBookingItems = state.bookingItems.filter(
            (item) => item.id !== bookingItem.id
          );

          state.bookingItems = nextBookingItems;

          toast.error("Your slot has been cancelled", {
            position: "top-right",
          });
        }
        localStorage.setItem(
          "bookingItems",
          JSON.stringify(state.bookingItems)
        );
        return state;
      });
    },
  },
});

export const { addTOBookings, removeFromForms } = bookingslice.actions;

export default bookingslice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  rescueItems: localStorage.getItem("rescueItems")
    ? JSON.parse(localStorage.getItem("rescueItems"))
    : [],
  // bookingTatalQuantity: 0,
};

const rescueslice = createSlice({
  name: "rescue",
  initialState,
  reducers: {
    addToRescue(state, action) {
      state.rescueItems.push(action.payload);
      localStorage.setItem("rescueItems", JSON.stringify(state.rescueItems));
      toast.success("You have succesfully uploaded  to rescue panel", {
        position: "top-right",
      });
    },
},
});

export const { addToRescue } = rescueslice.actions;

export default rescueslice.reducer;

// removeFromForms(state, action) {
//   state.rescueItems.map((rescueItem) => {
//     if (rescueItem.id === action.payload.id) {
//       const nextRescueItems = state.rescueItems.filter(
//         (item) => item.id !== rescueItem.id
//       );

//       state.rescueItems = nextRescueItems;

//       toast.error("Your slot has been cancelled", {
//         position: "bottom-left",
//       });
//     }
//     localStorage.setItem("rescueItems", JSON.stringify(state.rescueItems));
//     return state;
//   });
// },
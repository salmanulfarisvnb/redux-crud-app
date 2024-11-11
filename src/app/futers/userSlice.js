import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../assets/data";

const initialState = {
  user,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.user.find((f) => f.id === id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      let index;

      state.user.map((item, ind) => {
        if (item.id === id) {
          return (index = ind);
        }
      });
      state.user.splice(index, 1);
    },
  },
});

export default userSlice.reducer;
export const { addUser, updateUser, deleteUser } = userSlice.actions;

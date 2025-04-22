import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  value: string | null;
}

const initialState: userState = {
  value: JSON.parse(localStorage.getItem("user") || "null"),

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); 

    },
    clearUser: (state) => {
      state.value = null;
      localStorage.removeItem("user"); 

    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
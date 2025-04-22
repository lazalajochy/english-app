import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./utils/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

// Exporta los tipos para usar en los componentes
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
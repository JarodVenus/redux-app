import { configureStore } from "@reduxjs/toolkit";

const toto = (state = 0, action) => {
  return state;
}

export const store = configureStore({ reducer : toto });

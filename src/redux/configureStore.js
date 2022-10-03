import { configureStore } from "@reduxjs/toolkit";
import activeCardSlice from "../Slicer/activeCardSlice";

const store = configureStore({
    reducer:{
      user: activeCardSlice
      
    },
  });

  export default store;
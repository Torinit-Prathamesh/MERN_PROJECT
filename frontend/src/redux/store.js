import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import productappreducer from "./features/product-slice";
import toastappreducer from "./features/toast-slice";

export const store = configureStore({
  reducer: {
    productappreducer,
    toastappreducer,
  },
});

export const useAppSelector = useSelector;

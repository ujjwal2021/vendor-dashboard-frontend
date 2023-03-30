import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  loginApi,
  operatingCityApi,
  vendorDetailApi,
  busTypesApi,
  busApi,
  tripApi
} from "./services/api";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [operatingCityApi.reducerPath]: operatingCityApi.reducer,
    [vendorDetailApi.reducerPath]: vendorDetailApi.reducer,
    [busTypesApi.reducerPath]: busTypesApi.reducer,
    [busApi.reducerPath]: busApi.reducer,
    [tripApi.reducerPath]: tripApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare()
      .concat(loginApi.middleware)
      .concat(operatingCityApi.middleware)
      .concat(vendorDetailApi.middleware)
      .concat(busTypesApi.middleware)
      .concat(busApi.middleware)
      .concat(tripApi.middleware)
});
setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { loginApi,operatingCityApi, vendorDetailApi } from "./services/api"

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
        [operatingCityApi.reducerPath]: operatingCityApi.reducer,
        [vendorDetailApi.reducerPath]: vendorDetailApi.reducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(loginApi.middleware).concat(operatingCityApi.middleware).concat(vendorDetailApi.middleware)
})
setupListeners(store.dispatch)
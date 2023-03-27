import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "../utils";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl + "/vendor",
    prepareHeaders: (headers) => {
      headers.set(
        "authorization",
        `Bearer ${localStorage.getItem("token") || ""}`
      );
    },
  }),
  tagTypes: ["Login"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    refreshToken: builder.mutation({
      query: (data) => ({
        url: "/auth/refresh",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const vendorDetailApi = createApi({
  reducerPath: "vendorDetailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl + "/vendor/me",
    prepareHeaders: (headers) => {
      headers.set(
        "authorization",
        `Bearer ${localStorage.getItem("token") || ""}`
      );
    },
  }),
  endpoints: (builder) => ({
    getCurrentVendor: builder.query({
      query: () => "/",
    }),
  }),
});

export const operatingCityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl + "/cities",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${localStorage.getItem("token")}`);
    },
  }),
  tagTypes: ["Cities", "StateCity", "CityLocation"],
  endpoints: (builder) => ({
    getStateCity: builder.query({
      query: () => "/all",
      providesTags: ["StateCity"],
    }),
    getAllCities: builder.query({
      query: () => "/",
      providesTags: ["Cities"],
    }),
    createCity: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cities"],
    }),
    getSingleCity: builder.query({
      query: (_id) => `/${_id}`,
    }),
    deleteSingleCity: builder.mutation({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cities"],
    }),
    getAllLocations: builder.query({
      query: (_id) => `/${_id}/locations`,
      providesTags: (result, error, arg) => {
        return result
          ? [
              ...result?.locations?.map(({ city }) => ({
                type: "CityLocation",
                city,
              })),
              "CityLocation",
            ]
          : ["CityLocation"];
      },
    }),
    getSingleLocation: builder.query({
      query: ({ cityId, locationId }) => `/${cityId}/locations/${locationId}`,
    }),
    addCityLocation: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `/${_id}/locations`,
        method: "POST",
        body: rest,
      }),
      invalidatesTags: ["CityLocation"],
    }),
    updateCityLocation: builder.mutation({
      query: ({ cityId, locationId, ...rest }) => ({
        url: `/${cityId}/locations/${locationId}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: ["CityLocation"],
    }),
    deleteCityLocation: builder.mutation({
      query: ({ cityId, locationId }) => ({
        url: `/${cityId}/locations/${locationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CityLocation"],
    }),
  }),
});

export const { useLoginMutation, useRefreshTokenMutation } = loginApi;
export const { useGetCurrentVendorQuery } = vendorDetailApi;
export const {
  useGetStateCityQuery,
  useGetAllCitiesQuery,
  useCreateCityMutation,
  useDeleteSingleCityMutation,
  useAddCityLocationMutation,
  useDeleteCityLocationMutation,
  useGetAllLocationsQuery,
  useGetSingleLocationQuery,
  useGetSingleCityQuery,
  useUpdateCityLocationMutation,
} = operatingCityApi;

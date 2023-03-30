import React, { useEffect, useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import CityCategory from "../../components/Core/CityCategory/CityCategory";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import NoData from "../../components/UI/NoData/NoData";
import SelectComponent from "../../components/UI/Select/SelectComponent";
import Title from "../../components/UI/Title/Title";
import { useGlobalContext } from "../../context";
import {
  useCreateCityMutation,
  useGetAllCitiesQuery,
  useGetStateCityQuery,
} from "../../services/api";

import "./operatingcity.css";

const OperatingCity = () => {
  const { groupBy, setFrontendMessage } = useGlobalContext();
  const [absoluteWrapperActive, setAbsoluteWrapperActive] = useState(false);

  const [selectStateValue, setSelectStateValue] = useState("");
  const [selectCityValue, setSelectCityValue] = useState("");

  const { data, isError, isFetching, isLoading, isSuccess, refetch } =
    useGetAllCitiesQuery();

  const [
    createCity,
    {
      isError: createCityError,
      isSuccess: createCitySuccess,
      isLoading: createCityLoading,
    },
  ] = useCreateCityMutation();

  const {
    data: stateCityFetch,
    isError: stateCityFetchError,
    isLoading: stateCityFetchLoading,
    isSuccess: stateCityFetchSuccess,
    isFetching: stateCityFetchFetching,
  } = useGetStateCityQuery();

  const [stateCityData, setStateCityData] = useState(stateCityFetch?.data);

  const [stateOptions, setStateOptions] = useState([]);

  const [cityData, setCityData] = useState(data?.cities);
  const [groupedData, setGroupedData] = useState(
    groupBy(cityData, (city) => city.state)
  );

  const cancelClick = () => {
    setAbsoluteWrapperActive(false);
    setSelectStateValue("");
    setSelectCityValue("");
  };

  const openAbsoluteClick = () => {
    setAbsoluteWrapperActive(true);
  };
  const addCityClick = async () => {
    // api call
    await createCity({ state: selectStateValue, name: selectCityValue });
    setSelectStateValue("");
    setSelectCityValue("");
    setAbsoluteWrapperActive(false);
  };

  useEffect(() => {
    isSuccess && setCityData(data?.cities);
  }, [isSuccess, data]);

  useEffect(() => {
    setGroupedData(groupBy(cityData, (city) => city.state));
  }, [cityData, isSuccess]);

  useEffect(() => {
    if (stateCityFetchSuccess) {
      setStateCityData(stateCityFetch?.data);
      var tempArr = [];
      Object.keys(stateCityFetch?.data)?.forEach((key) => {
        tempArr.push(key);
      });
      setStateOptions(tempArr);
    }
  }, [stateCityFetchSuccess, stateCityFetch]);

  useEffect(() => {
    setSelectCityValue("");
  }, [selectStateValue]);

  // handling errors
  useEffect(() => {
    stateCityFetchError &&
      setFrontendMessage({
        status: "error",
        msg: "Some error occured while fetching state and city",
      });
    createCityError &&
      setFrontendMessage({
        status: "error",
        msg: "couldn't add city. Please try again later",
      });
  }, [stateCityFetchError, createCityError]);

  if (
    createCityLoading ||
    stateCityFetchLoading ||
    stateCityFetchFetching ||
    isFetching ||
    isLoading
  ) {
    return (
      <div className="outer-cover loader-container">
        <Loader />
      </div>
    );
  }
  return (
    <div className="operating-cty-container-outer outer-cover">
      <div className="top-title operating-city-top">
        <Title>Operating City</Title>
        <Button onClick={openAbsoluteClick}>Add Operating city</Button>
      </div>
      <div className="separator"></div>

      <div className="operating-city-main">
        {groupedData?.length > 0 ? (
          groupedData?.map((item, index) => {
            return (
              <CityCategory key={index} state={item[0]} cities={item[1]} />
            );
          })
        ) : (
          <NoData />
        )}
      </div>
      <div className={`absolute-wrapper ${absoluteWrapperActive && "active"}`}>
        <div className="absolute-container">
          <div className="absolute-message">error message</div>
          <div className="absolute-top p-m primary-bg">
            <div className="light-900 h4">Operating city</div>
          </div>
          <div className="absolute-main">
            <div className="absolute-select">
              <div className="select-outer">
                <SelectComponent
                  label="State"
                  placeholder="Select State"
                  selectValue={selectStateValue}
                  setSelectValue={setSelectStateValue}
                  options={stateOptions}
                />
              </div>
              <div className="select-outer">
                <SelectComponent
                  label="City"
                  placeholder="Select City"
                  selectValue={selectCityValue}
                  setSelectValue={setSelectCityValue}
                  options={stateCityData ? stateCityData[selectStateValue] : []}
                />
              </div>
            </div>
            <div className="group-button-container p-y-m">
              <Button
                type="outlined"
                size="default"
                color="error"
                onClick={cancelClick}
              >
                Cancel
              </Button>
              <Button
                type="filled"
                size="default"
                color="primary"
                onClick={addCityClick}
                disabled={
                  createCityLoading ||
                  selectCityValue.length === 0 ||
                  selectStateValue.length === 0
                    ? true
                    : false
                }
              >
                {createCityLoading ? "Loading" : "Add City"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingCity;

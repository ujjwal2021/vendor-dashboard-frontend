import React, { useContext, useEffect, useState } from "react";
import { useGetCurrentVendorQuery, useGetStateCityQuery } from "./services/api";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // everything
  const serverUrl = "https://omartravels.the-binaries.xyz/api/v1";

  const [frontendMessage, setFrontendMessage] = useState({status: "", msg: ""})

  const {data: currentVendorFetch, isError: currentVendorFetchError, isSuccess:currentVendorFetchSuccess, isLoading: currentVendorFetchLoading, isFetching: currentVendorFetchFetching} = useGetCurrentVendorQuery()

  const [vendorDetail, setVendorDetail] = useState(currentVendorFetch?.vendor)
  
  useEffect(()=> {
    currentVendorFetchSuccess && setVendorDetail(currentVendorFetch?.vendor)
  }, [currentVendorFetchSuccess, currentVendorFetch])

  useEffect(()=> {
    if(frontendMessage.status.length > 0){
      setTimeout(()=> {
        setFrontendMessage({status: "", msg: ""})
      }, 3000)
    }
  }, [frontendMessage])




  // function to group array based on parameter
  const groupBy = (list, keyGetter) => {
    const map = new Map();
    list?.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return [...map.entries()]
  };

  return (
    <AppContext.Provider
      value={{
        serverUrl,
        groupBy,
        frontendMessage,
        setFrontendMessage,
        vendorDetail
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };

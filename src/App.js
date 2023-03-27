import React, { useEffect } from "react";
import { BrowserRouter as Router,Routes, Route, Navigate, useNavigate} from "react-router-dom"
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import Details from "./Pages/Details/Details"
import OperatingCity from "./Pages/OperatingCity/OperatingCity"
import OperatinLocation from "./Pages/OperatingCity/OperatingLocation/OperatingLocation"
import EditDetails from "./Pages/EditDetails/EditDetails"
import EditLocation from "./Pages/OperatingCity/EditLocation/EditLocation";
import { useGetCurrentVendorQuery } from "./services/api";
import { useGlobalContext } from "./context";

function App() {
  const navigate = useNavigate()
  const {frontendMessage, setFrontendMessage, currentVendorFetchError, currentVendorFetchLoading, currentVendorFetchFetching, currentVendorFetchSuccess} = useGlobalContext()
  // const {data: currentVendorFetch, error: currentVendorFetchError, isSuccess:currentVendorFetchSuccess, isLoading: currentVendorFetchLoading, isFetching: currentVendorFetchFetching, refetch: currentVendorRefetch} = useGetCurrentVendorQuery()

  useEffect(()=> {
    currentVendorFetchError && navigate("/login")
  }, [currentVendorFetchError])

  if(currentVendorFetchError?.status === 401 ){
    return (
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={<Navigate to="/login"/>} />
        </Routes>
      </div>
  );
  }
  return (
    <div className="app">
       <div className={`error-message-container ${(frontendMessage?.status?.length > 0) && "active"}`}>{frontendMessage.msg}</div>
        {(!(currentVendorFetchFetching || currentVendorFetchLoading)) &&(
          <Routes>
            <Route path="/login" element={currentVendorFetchSuccess ? <Navigate to="/details"/>:<Login/>} />
            <Route path="/" element={<Home/>}>
              <Route path="details" element={<Details/>}/>
              <Route path="details/edit" element={<EditDetails/>}/>
              <Route path="operatingCity" element={<OperatingCity/>}/>
              <Route path="operatingCity/:cityId/addLocation" element={<OperatinLocation/>}/>
              <Route path="operatingCity/:cityId/locations/:locationId/edit" element={<EditLocation/>}/>
            </Route>
          </Routes>
        )
        
        }
    </div>
  );
}

export default App;

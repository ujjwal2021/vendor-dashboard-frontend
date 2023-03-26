import React, { useEffect } from "react";
import { BrowserRouter as Router,Routes, Route, Navigate, useNavigate} from "react-router-dom"
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import Details from "./Pages/Details/Details"
import OperatingCity from "./Pages/OperatingCity/OperatingCity"
import OperatinLocation from "./Pages/OperatingCity/OperatingLocation/OperatingLocation"
import EditLocation from "./Pages/OperatingCity/EditLocation/EditLocation";
import { useGetCurrentVendorQuery } from "./services/api";
import { useGlobalContext } from "./context";

function App() {
  const navigate = useNavigate()
  const {frontendMessage, setFrontendMessage} = useGlobalContext()
  const {data: currentVendorFetch, error: currentVendorFetchError, isSuccess:currentVendorFetchSuccess, isLoading: currentVendorFetchLoading, isFetching: currentVendorFetchFetching, refetch: currentVendorRefetch} = useGetCurrentVendorQuery()
  console.log(currentVendorFetchError);

  useEffect(()=> {
    currentVendorFetchError && navigate("/login")
  }, [currentVendorFetchError])

  if(currentVendorFetchError?.status == 401 ){
    return (
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login {...{currentVendorRefetch}}/>} />
          <Route path="/*" element={<Navigate to="/login" {...{currentVendorRefetch}}/>} />
        </Routes>
      </div>
  );
  }
  return (
    <div className="app">
       <div className={`error-message-container ${(frontendMessage?.status?.length > 0) && "active"}`}>{frontendMessage.msg}</div>
        {(!(currentVendorFetchLoading || currentVendorFetchLoading)) &&(
          <Routes>
            <Route path="/login" element={currentVendorFetchSuccess ? <Navigate to="/details"/>:<Login {...{currentVendorRefetch}}/>} />
            <Route path="/" element={<Home {...{currentVendorRefetch}}/>}>
              <Route path="details" element={<Details/>}/>
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

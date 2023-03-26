import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import InputWithLabel from "../../../components/UI/InputWithLabel/InputWithLabel";
import SelectComponent from "../../../components/UI/Select/SelectComponent";
import Title from "../../../components/UI/Title/Title";
import "./operatingLocation.css";
import Button from "../../../components/UI/Button/Button";
import TextArea from "../../../components/UI/TextArea/TextArea";
import { useAddCityLocationMutation, useDeleteSingleCityMutation, useGetAllLocationsQuery, useGetSingleCityQuery } from "../../../services/api";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../../context";


const options = [
  "place 1", "place 2"
]

const OperatingLocation = () => {
  const {cityId} = useParams() 
  const navigate = useNavigate()
  const {frontendMessage, setFrontendMessage} = useGlobalContext()


  const {data: allLocationFetch,  isSuccess: allLocationFetchSuccess, refetch: allLocationRefetch} = useGetAllLocationsQuery(cityId)
  const {data: singleCityFetch, isSuccess: singleCityFetchSuccess, isError: singleCityFetchError} = useGetSingleCityQuery(cityId)
  const [addLocation, {isError: addLocationError, isLoading: addLocationLoading, isSuccess: addLocationSuccess}] = useAddCityLocationMutation()
  const [deleteCity, {isError: deleteCityError, isLoading: deleteCityLoading, isSuccess: deleteCitySuccess}] = useDeleteSingleCityMutation()


  const [city, setCity] = useState(singleCityFetch?.city)
  const [allLocation, setAllLocation] = useState(allLocationFetch?.locations)


  // values to add
  const [selectLocationValue, setSelectLocationValue] = useState("");
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [landmark, setLandmark] = useState("")

  const handleAddLocationClick = async () => {
    const val = {
      _id: cityId,
      name: selectLocationValue,
      address,
      phone,
      landmark
    }
    await addLocation(val)
  }

  const handleDeleteCityClick = async() => {
    await deleteCity(cityId)
  }

  // set all location data
  useEffect(()=> {
      allLocationFetchSuccess && setAllLocation(allLocationFetch?.locations)
  }, [allLocationFetchSuccess, allLocationFetch])

  useEffect(()=> {
    singleCityFetchSuccess && setCity(singleCityFetch?.city)
  }, [singleCityFetchSuccess, singleCityFetch])

  useEffect(()=> {
      if(addLocationSuccess){
        setSelectLocationValue("")
        setAddress("")
        setPhone("")
        setLandmark("")
        allLocationRefetch()
      }
  }, [addLocationSuccess])

  useEffect(()=> {
    deleteCitySuccess && navigate("/operatingCity")
  }, [deleteCitySuccess])


  // handle error
  useEffect(()=> {
    addLocationError && setFrontendMessage({status: "error", msg: "error while adding location"})
    deleteCityError && setFrontendMessage({status: "error", msg: "error while deleting city"})
  }, [addLocationError, deleteCityError])  

  return (
    <div className="operating-city-container-outer outer-cover">
      <div className="operating-location-top top-title m-y-m">
        <Title>{city?.name}</Title>
        <Button onClick={handleDeleteCityClick} disabled={deleteCityLoading ? true: false}>{
          (deleteCityLoading) ? "Loading" : "Delete City"
        }</Button>
      </div>
      <div className="separator"></div>
      <div className="operating-location-main">
        <div className="operating-location-left font-regular primary-500 h5 ">
          {/* will move to separate component */}
          {
            allLocation?.map((item, index)=> {
              const {name, id} = item;
              return <NavLink key={index} to={`/operatingCity/${cityId}/locations/${id}/edit`} className="primary-500"><div className="location-list-item click">{name}</div></NavLink>
              // return <div key={index} className="location-list-item click">{name}</div>
            })
          }
          
        </div>
        <div className="operating-location-right">
          <div className="info primary-500 para">
            {" "}
            <FaInfoCircle />{" "}
            <span>
              Please enter all the location details responsibly as this address
              is shown to users.
            </span>
          </div>

          <div className="location-form-container">
            <div className="form-control">
              <SelectComponent
                label="Location"
                labelTag="select among the known location"
                selectValue={selectLocationValue}
                setSelectValue={setSelectLocationValue}
                options={options}
              />
            </div>
            <div className="form-control">
              <InputWithLabel
                label="Name Of Place"
                placeholder="Enter the famous name of place"
                labelTag="Enter popular name of place so that passenger can identify"
                value={address}
                onchange={(e) => setAddress(e.target.value)}
                
              />
            </div>
            <div className="form-control">
              <InputWithLabel
                label="Contact Number"
                placeholder="Enter the contact details"
                labelTag="This number will be used by users to contact in case of any difficulty"
                value={phone}
                onchange={(e)=> setPhone(e.target.value)}
              />
            </div>
            <div className="form-control">
              <TextArea
                label="Landmark"
                labelTag="e.g. opposite to front gate of Taj Mahal"
                placeholder="Enter a landmark..."
                value={landmark}
                onchange={(e)=> setLandmark(e.target.value)}
              />
            </div>
            <div className="form-control form-btn-control">
                <Button size="default" onClick={handleAddLocationClick} disabled={(addLocationLoading) ? true: false}>
                  {
                    (addLocationLoading ? "Loading" : "Save Location")
                  }
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingLocation;

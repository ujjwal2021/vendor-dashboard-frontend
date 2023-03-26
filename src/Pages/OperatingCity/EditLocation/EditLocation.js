import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import InputWithLabel from "../../../components/UI/InputWithLabel/InputWithLabel";
import SelectComponent from "../../../components/UI/Select/SelectComponent";
import Title from "../../../components/UI/Title/Title";
import Button from "../../../components/UI/Button/Button";
import TextArea from "../../../components/UI/TextArea/TextArea";
import { useDeleteCityLocationMutation, useGetAllLocationsQuery, useGetSingleCityQuery, useGetSingleLocationQuery, useUpdateCityLocationMutation } from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const options = [
  "place 1", "place 2"
]

const EditLocation = () => {
    const navigate = useNavigate()
  const {cityId, locationId} = useParams() 


  const {data: allLocationFetch,  isSuccess: allLocationFetchSuccess, refetch: allLocationRefetch} = useGetAllLocationsQuery(cityId)
  const {data: singleCityFetch, isSuccess: singleCityFetchSuccess} = useGetSingleCityQuery(cityId)

  const {data: singleLocationFetch, isError: singleLocationFetchError, isSuccess: singleLocationFetchSuccess, isLoading: singleLocationFetchLoading} = useGetSingleLocationQuery({cityId, locationId})
  




  const [editLocation, {isError: editLocationError, isLoading: editLocationLoading, isSuccess: editLocationSuccess}] = useUpdateCityLocationMutation()
  const [deleteLocation, {isError: deleteLocationError, isSuccess: deleteLocationSuccess, isLoading: deleteLocationLoading}] = useDeleteCityLocationMutation()
  const [city, setCity] = useState(singleCityFetch?.city)
  const [allLocation, setAllLocation] = useState(allLocationFetch?.locations)
  const [singleLocation, setSingleLocation] = useState(singleCityFetch?.location)


  // values to add
  const [selectLocationValue, setSelectLocationValue] = useState("");
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [landmark, setLandmark] = useState("")

  const handleEditLocationClick = async () => {
    const val = {
        cityId,
        locationId,
        name: selectLocationValue,
        address,
        phone,
        landmark
      }
      await editLocation(val)
  }

  const handleDeleteLocationClick = async () => {
    await deleteLocation({cityId, locationId})
  }


  // set all location data
  useEffect(()=> {
      allLocationFetchSuccess && setAllLocation(allLocationFetch?.locations)
  }, [allLocationFetchSuccess, allLocationFetch])

  useEffect(()=> {
    singleCityFetchSuccess && setCity(singleCityFetch?.city)
  }, [singleCityFetchSuccess, singleCityFetch])

  useEffect(()=> {
    if(singleLocationFetchSuccess){
        setSingleLocation(singleLocationFetch?.location || "")
        setSelectLocationValue(singleLocationFetch?.location?.name || "")
        setAddress(singleLocationFetch?.location?.address || "")
        setPhone(singleLocationFetch?.location?.phone || "")
        setLandmark(singleLocationFetch?.location?.landmark || "")
    }
  }, [singleLocationFetchSuccess, singleLocationFetch])


//   navigate on edit success
useEffect(()=> {
    (editLocationSuccess || deleteLocationSuccess) && navigate(`/operatingCity/${cityId}/addLocation`)
}, [editLocationSuccess, deleteLocationSuccess])

  

  return (
    <div className="operating-city-container-outer outer-cover">
      <div className="operating-location-top m-y-m">
        <Title>{city?.name} ({selectLocationValue})</Title>
      </div>
      <div className="separator"></div>
      <div className="operating-location-main">
        <div className="operating-location-left font-regular primary-500 h5 ">
          {/* will move to separate component */}
          {
            allLocation?.map((item, index)=> {
              const {name, id} = item;
              return <div key={index} className="location-list-item click">{name}</div>
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

                  <Button size="default" type="outlined" color="error" onClick={handleDeleteLocationClick} disabled={(deleteLocationSuccess || deleteLocationLoading) ? true: false}>
                    {
                        deleteLocationLoading? "Loading": "Delete"
                    }
                  </Button>
                <Button size="default" onClick={handleEditLocationClick} disabled={(editLocationSuccess || editLocationLoading) ? true: false}>
                    {
                        editLocationLoading? "Loading": "Save Location"
                    }
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLocation;

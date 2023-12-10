import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLocationDetails } from "../../Slices/LocationSlice";
import "../../Styles/Locations.css";
import { Audio } from  'react-loader-spinner'


const LocationDetail = () => {
  const dispatch = useDispatch();
  const { locationId } = useParams();

  useEffect(() => {
    dispatch(fetchLocationDetails(locationId));
  }, [dispatch, locationId]);

  const location = useSelector((state) => {
    return state.location.locationDetails;
  });

  if (!location) {
    return <div>      <Audio
    height = "80"
    width = "80"
    color="black"

    radius = "9"
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  /></div>;
  }

  const formattedCreationDate = new Date(location.created).toLocaleDateString(
    "en-GB"
  );

  return (
    <div className="location-details-container">
      <h1 className="location-details-title">
        <center>Location Detail</center>
      </h1>
      <div className="location-details-card">
        <div className="location-details-info">
          <div>
            <b>ID:</b> {location.id}
          </div>
          <div>
            <b>Name:</b> {location.name}
          </div>
          <div>
            <b>Type:</b> {location.type}
          </div>
          <div>
            <b>Dimension:</b> {location.dimension}
          </div>
          <div>
            <b>URL:</b> {location.url}
          </div>
          <div>
            <b>Creation Date:</b> {formattedCreationDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;

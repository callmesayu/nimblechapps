import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../Slices/LocationSlice";
import "../../Styles/Locations.css";
import { Audio } from  'react-loader-spinner'


const LocationCard = ({ location }) => {
  return (
    <a href={`/location/${location.id}`} className="location-card">
      <div className="location-info">
        <div>
          <b>ID:</b> {location.id}
        </div>
        <div>
          <b>Name:</b> {location.name}
        </div>
        <div>
          <b>Type:</b> {location.type}
        </div>
      </div>
    </a>
  );
};

const Locations = () => {
  const dispatch = useDispatch();
  const { locations, status, error } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  if (status === "loading") {
    return <div>      <Audio
    height = "80"
    color="black"
    width = "80"
    radius = "9"
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  /></div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="location-list">
      <h1>Locations</h1>
      <div className="location-container">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default Locations;
